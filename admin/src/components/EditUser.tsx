"use client"
import React from 'react';
import {SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {z} from 'zod'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const FormSchema = z.object({
    username: z.string().min(2, {message: "Username must be atleast 2 characters"}).max(50),
    email: z.string().email({message: "Invalid email address!"}),
    phone: z.string().min(10).max(15),
    location: z.string().min(2),
    role: z.enum(["admin", "user"]),
})

type FormSchemaType = z.infer<typeof FormSchema>

const EditUser = () => {
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "hamza.ashraf",
            email: "hamza@gmail.com",
            phone: "+923110767466",
            location: "New York, NY",
            role: "admin"
        }
    })
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription asChild>
                    <Form {...form}>
                        <form className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>This is your public username.</FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>This is your public email.</FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>This is your public phone.</FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="location"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>This is your public location.</FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Select {...field}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                    <SelectItem value="user">User</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>Only verified users can be admin.</FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        <Button type={"submit"}>Submit</Button>
                        </form>
                    </Form>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    );
}

export default EditUser;
