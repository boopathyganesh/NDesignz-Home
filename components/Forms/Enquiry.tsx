'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PhoneInput from "../ui/PhoneInput"
import { useState } from "react"

export default function EnquiryForm() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Phone:', phone);
    };
    return (
        <form onSubmit={handleSubmit} action="post">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Book a Free Consultation!</CardTitle>
                    <CardDescription>
                        Enter your contact details below to book a free consultations with our experts.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Name</Label>
                        <Input id="name" type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Mobile Number</Label>
                        <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2">
                    <Button type="submit" className="w-full">Book Now!</Button>
                    <span className="text-xs text-black-200 ">
                        By booking our free consultation, your agree to our privacy policy and Terms and conditions
                    </span>
                </CardFooter>
            </Card>
        </form>

    )
}
