'use client';

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import PhoneInput from "../ui/PhoneInput";
import axios, { AxiosResponse } from "axios";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const enquirySchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    phone: z.string().regex(
        /^(\+(\d{1,3})[\-\s]?)?(\d{10}|\d{7,15})$/,
        { message: "Invalid phone number" }
    ),
    message: z.string().min(1, { message: "Message is required" }),
});

type EnquiryFormInputs = z.infer<typeof enquirySchema>;
interface EnquireProps {
    onSuccessSubmit: () => void;
}
export default function ConnectForm({ onSuccessSubmit }: EnquireProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const form = useForm<EnquiryFormInputs>({
        resolver: zodResolver(enquirySchema),
    });

    const { handleSubmit } = form;

    const loadInSheet = async (data: EnquiryFormInputs): Promise<any> => {
        try {
            const apiUrl = `https://ndesignz-server.vercel.app/connect`;
            const response: AxiosResponse<any> = await axios.post(apiUrl,
                {
                    ...data
                }
            );
            //console.log(response)
            if (response && response.status === 200) {
                return response.data;
            } else {
                throw new Error(`Failed to Write in Sheet`);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.message);
                throw new Error(`Failed to Write in Sheet: ${error.message}`);
            } else {
                console.error('Unexpected error:', error);
                throw new Error('An unexpected error occurred');
            }
        }
    }

    const onSubmit = async (data: EnquiryFormInputs) => {
        setLoading(true);
        data.phone = data.phone
        setError(null);

        try {
            const response = await loadInSheet(data)
            //console.log(response)
            if (response) {
                setIsOpen(true)
                form.reset({ message: "", phone: "", name: "" })
                onSuccessSubmit();
            }
        } catch (err) {
            console.error("Form submission error:", err);
            setError("An error occurred during submission.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} action="post" className="max-h-90 overflow-y-auto">
                <div className="flex flex-col items-center justify-start w-full gap-5 my-8 md:my-0">
                    <div className="flex items-center justify-center w-full">
                        <h1 className="text-2xl md:text-4xl font-semibold text-teal-700 mb-3 text-center">Let’s Start Your Design Journey!</h1>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start gap-5 px-10">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field, fieldState }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl className="w-full">
                                        <Input placeholder="Enter your Name" {...field} className="w-full" disabled={loading} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field, fieldState }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl className="w-full">
                                        <PhoneInput {...field} className="w-full" disabled={loading} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field, fieldState }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Message</FormLabel>
                                    <FormControl className="w-full">
                                        <Textarea placeholder="Type your message here." {...field} className="w-full" disabled={loading} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <Button type="submit" className="w-full hover:bg-teal-500 hover:text-black smooth" disabled={loading}>
                            {loading ? "Sending..." : "Send!"}
                        </Button>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                </div>
            </form>
            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>You Connection Request was Recorded!</AlertDialogTitle>
                        <AlertDialogDescription>
                            You will be receiving a Call or Whatsapp Conversion regarding this enquiry from our Expert Designers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Form>

    );
}
