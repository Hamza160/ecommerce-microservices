import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardList from "@/components/CardList";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {BadgeCheck, Candy, Shield} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import {Badge} from "@/components/ui/badge";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import EditUser from "@/components/EditUser";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";
import {MultipleLineChart} from "@/components/MultipleLineChart";

interface Props {
    params: Promise<{ username: string }>
}

export async function generateMetadata({params}: Props): Promise<{ title: string }> {
    const {username} = await params
    return {
        title: `User ${username}`,
    }
}

export default async function SingleUser({params}: Props) {
    const {username} = await params;
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>{username}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* Container   */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/*  Left  */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/*   User badges Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <BadgeCheck size={36}
                                                className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the
                                        admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Shield size={36}
                                            className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">Admin users have access to all features
                                        and can manage users. </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Candy size={36}
                                           className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the
                                        admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <BadgeCheck size={36}
                                                className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the
                                        admin.</p>
                                </HoverCardContent>
                            </HoverCard>

                        </div>
                    </div>
                    {/*   Information Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold">User Information</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>Edit User</Button>
                                </SheetTrigger>
                                <EditUser/>
                            </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile Completion</p>
                                <Progress value={33}/>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username:</span>
                                <span>{username}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Email:</span>
                                <span>hamza@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Phone Number:</span>
                                <span>+923110767466</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Location:</span>
                                <span>New York, NY</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Joined on 2025.01.01</p>
                    </div>
                    {/*   Card List Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title={"Recent Transactions"}/>
                    </div>
                </div>
                {/*  Right  */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/*    User Card Container*/}
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                        <div className="flex items-center">
                            <Avatar className="size-12">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/69757932?s=40&v=4"/>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-semibold">Hamza Ashraf</h1>
                        </div>
                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Enim fugit in mollitia natus nisi,
                            officiis totam vel? Aspernatur, consectetur dignissimos eveniet fugit hic ipsam libero modi
                            pariatur tempore unde voluptatum.</p>
                    </div>
                    {/*    Chart Container*/}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <MultipleLineChart/>
                    </div>
                </div>
            </div>
        </div>
    );
}

