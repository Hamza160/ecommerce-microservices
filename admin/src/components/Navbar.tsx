import React from 'react';
import Link from "next/link";
import {LogOut, Moon, Settings, SquareMenu, User} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/ModeToggle";
import {SidebarTrigger} from "@/components/ui/sidebar";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4">
            {/*Left*/}
            <SidebarTrigger/>
            {/*Right*/}
            <div className="flex items-center gap-4">
                <Link href={"/"}>Dashboard</Link>
                <ModeToggle/>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/69757932?s=40&v=4"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                            <User className={'h-[1.2rem] w-[1.2rem] mr-2'}/>
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className={'h-[1.2rem] w-[1.2rem] mr-2'}/>
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant={"destructive"}>
                            <LogOut className={'h-[1.2rem] w-[1.2rem] mr-2'}/>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <SquareMenu/>
                            <span className="sr-only">Open Menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
                        <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
                        <DropdownMenuItem>Menu Item 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}

export default Navbar;
