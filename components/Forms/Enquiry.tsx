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
import * as gtag from '@/lib/gtag';

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
    onSuccessSubmit ?: () => void;
}
export default function EnquiryForm({ onSuccessSubmit }: EnquireProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<EnquiryFormInputs>({
        resolver: zodResolver(enquirySchema),
    });

    const { handleSubmit } = form;

    const loadInSheet = async (data: EnquiryFormInputs): Promise<any> => {
        try {
            const apiUrl = `https://ndesignz-server.vercel.app/enquiry`;
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
        //console.log(data.phone);

        data.phone = data.phone
        setError(null);

        try {
            const response = await loadInSheet(data)
            //console.log(response)
            if (response) {
                //setIsOpen(true)
                form.reset()
                //onSuccessSubmit();
                gtag.event({
                    action: 'click_button',
                    category: 'Button',
                    label: 'Subscribe Now',
                    value: 1,
                });
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
                <Card className="w-full max-w-sm">
                    <CardHeader className="px-5 py-3">
                        <CardTitle className="text-2xl">Book a Free Consultation!</CardTitle>
                        <CardDescription>
                            Enter your contact details below to book a free consultation with our experts.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-2 pb-1">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
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
                                <FormItem>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
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
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Type your message here." {...field} className="w-full" disabled={loading} />
                                    </FormControl>
                                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-1 py-2">
                        <Button type="submit" className="w-full hover:bg-teal-500 hover:text-black smooth" disabled={loading}>
                            {loading ? "Booking..." : "Book Now!"}
                        </Button>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <span className="text-xs text-black/40">
                            By booking our free consultation, you agree to our privacy policy and Terms and conditions
                        </span>
                    </CardFooter>
                </Card>
            </form>

        </Form>

    );
}
