import { Metadata } from 'next';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageUploader from '@/components/Forms/AdminForms/ImageUploader';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
    title: "Admin - LivStyle Homes",
    description: "Livstyle Homes - Your Interior Pro",
};
const DynamicImageUploader = dynamic(() => import('@/components/Forms/AdminForms/ImageUploader'), {
    ssr: false,
});
const AdminPage = () => {
    return (
        <div className="max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto w-full h-full flex flex-col items-center justify-center px-5 xl:px-0 pt-32">
            <div className='mt-5 w-full h-full flex flex-col items-center justify-center gap-5'>
                <h2 className='text-3xl font-medium text-teal-700'>Manage your Site Data</h2>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <Tabs defaultValue="banner" className="flex items-center justify-between w-full h-full gap-5">
                        <TabsList className='w-1/6 flex flex-col items-center h-full py-4 text-black'>
                            <TabsTrigger value="banner" className='data-[state=active]:bg-teal-600 data-[state=active]:text-white rounded-lg'>Home Banner</TabsTrigger>
                            <TabsTrigger value="password" className='data-[state=active]:bg-teal-600 data-[state=active]:text-white rounded-lg'>Password</TabsTrigger>
                        </TabsList>
                        <div className='w-5/6 h-[650px] flex items-center justify-center border rounded-lg'>
                            <TabsContent value="banner" className='w-full h-full p-2 flex items-start justify-center'>
                                <DynamicImageUploader section={"home_banner"} />
                            </TabsContent>
                            <TabsContent value="password">Change your password here.</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
