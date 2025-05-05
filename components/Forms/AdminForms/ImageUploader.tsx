"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { FaTrash } from "react-icons/fa6";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { getPublicId } from "@/lib/utils";


const MAX_UPLOAD_SIZE = 3 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg'];

const ProjectsFormSchema = z.object({
    image: z
        .instanceof(File)
        .optional()
        .refine((file: File | undefined) => {
            // This will now correctly return true if there's no file or if the file size is within limits
            return !file || file.size <= MAX_UPLOAD_SIZE;
        }, {
            message: "File size must be less than 3MB",
        })
        .refine((file: File | undefined) => {
            // This will check if the file type is included in the accepted types
            return !file || ACCEPTED_IMAGE_TYPES.includes(file.type);
        }, {
            message: "File must be a JPEG or PNG",
        }),
});

type ProjectsFormData = z.infer<typeof ProjectsFormSchema>;

interface ImageProps {
    section: string;
}

const ImageUploader = ({ section }: ImageProps) => {
    const [Loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<any | null>(null);
    const [images, setImages] = useState<string[]>([
        "/images/Brand/irox-tech.svg",
        "/images/Brand/brand-text.svg",
        "/images/Brand/brand.svg"
    ]);
    const [isUpdated, setIsUpdated] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();

    const projectsForm = useForm<ProjectsFormData>({
        resolver: zodResolver(ProjectsFormSchema),
        defaultValues: {
            image: undefined,
        },
    });

    async function handleFetchImages(folder: string) {
        try {
            const res = await axios.get(`/api/serve?folder=livstyle/${folder}`); // Fix URL formatting
            console.log("serve::::", res);

            if (res.status === 200) {
                setImages(res.data.images); // Store response in state
            } else {
                setImages([]); // Ensure state resets on failure
            }
        } catch (error: any) {
            console.error("Error fetching images:", error);
        }
    }

    useEffect(() => {
        handleFetchImages(`${section}`); // Call function with desired folder
    }, [isUpdated]);

    const deleteImage = async (publicId: string) => {
        try {
            const res = await fetch(`/api/delete-image?public_id=${publicId}`, {
                method: "DELETE",
            });

            const data = await res.json();
            console.log("delete-res::::", data);
            if (data.success) {
                setIsUpdated(!isUpdated);
                toast.success("Deleted successfully");
            } else {
                toast.error("Failed to delete");
            }
        } catch (error: any) {
            toast.error("Error deleting image:", error);
        }
    };


    const handleUpload = async (file: File, type: any, filename: string) => {
        if (!user.name) {
            toast.error("Problem with Session Data: Username not Found!");
            return;
        }

        if (file.size > MAX_UPLOAD_SIZE) {
            projectsForm.setError(type, { type: "custom", message: `File size must be less than 3MB` })
        }

        if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
            projectsForm.setError(type, { type: "custom", message: `Invalid Image Type` })
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("username", `${user.name}-${session?.user?.id}`);
        formData.append("type", "projects");
        formData.append("filename", filename);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (data.success) {
                toast.success(`File uploaded successfully: ${data.fileUrl}`);
                return data.fileUrl
            } else {
                toast.error(`Error: ${data.error}`);
                return null
            }
        } catch (error) {
            toast.error(`Error: ${error}`);
            return null
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (values: ProjectsFormData) => {
        setLoading(true);
        try {
            console.log(values);
            const formData = new FormData();
            if (values.image) {
                formData.append("file", values.image);
            } else {
                toast.error("No file selected");
                return;
            }
            formData.append("upload_preset", "livstyle_preset");
            formData.append("folder", `livstyle/${section}`);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            console.log(data);

            if (data) {
                projectsForm.setValue("image", undefined);
                setIsUpdated(!isUpdated);
                toast.success(`File uploaded successfully`);
            }
        } catch (error: any) {
            toast.error("Failed to upload images!", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="max-w-3xl w-full h-full flex flex-col items-center justify-center mt-6">
                <Form {...projectsForm}>
                    <form
                        onSubmit={projectsForm.handleSubmit(onSubmit)}
                        method="post"
                        className="w-full h-full flex flex-col items-center justify-start gap-5"
                    >
                        <div className="w-full flex flex-col items-center justify-start gap-8 px-1">
                            <div className="flex flex-col w-full gap-4 border p-4 rounded-lg">
                                {/* Project Title */}
                                {/* <FormField
                                    control={projectsForm.control}
                                    name={`title`}
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>Project Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Portfolio Website" {...field} disabled={!edit || Loading} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                /> */}

                                <FormField
                                    control={projectsForm.control}
                                    name={`image`}
                                    render={({ field, fieldState }) => (
                                        <FormItem className="w-full flex items-center justify-center gap-5">
                                            <FormLabel className="space-y-2">Upload Section Image</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    disabled={Loading}
                                                    className="w-96 mt-3"
                                                    onChange={async (e) => {
                                                        field.onChange(e.target.files?.[0])
                                                        const file = e.target.files?.[0]; // Get the first uploaded file
                                                        projectsForm.setValue(`image`, file);
                                                        // if (file) {
                                                        //     const uploadedUrl = await handleUpload(file, `image`, file.name);
                                                        //     if (uploadedUrl) {
                                                        //         projectsForm.setValue(`image`, uploadedUrl);
                                                        //     }
                                                        // } else {
                                                        //     fieldState.error = { type: "error", message: "File not found" }
                                                        // }
                                                    }} // Manually handle file input
                                                    accept="image/*" // Restrict file types to images
                                                />
                                            </FormControl>
                                            {fieldState.error && (
                                                <FormMessage>{fieldState.error.message}</FormMessage>
                                            )}
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button disabled={Loading} type="submit" className='bg-black font-semibold w-max text-white'>{Loading ? "Uploading...." : "Upload"}</Button>
                        </div>
                        <div className="w-full max-h-96 border rounded-md flex flex-wrap items-center justify-start gap-5 p-5">
                            {images.length > 0 ? (
                                images.map((img, index) => {
                                    const img_id = getPublicId(img);
                                    console.log("Public_ID:", img_id);
                                    return (
                                        <div
                                            key={index}
                                            className="relative w-36 h-36 flex items-center justify-center border border-teal-500 rounded-2xl p-2"
                                        >
                                            <Image src={img} alt={`image-${index}`} height={500} width={500} />
                                            <Button type="button" onClick={() => deleteImage(img_id)} className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-600 hover:bg-red-500 hover:text-white hover:scale-105">
                                                <FaTrash />
                                            </Button>
                                        </div>
                                    );
                                })
                            ) : (
                                <span>No images found!</span>
                            )}
                        </div>
                    </form>
                </Form>
            </div>

        </div>
    );
};

export default ImageUploader;
