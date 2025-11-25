import {Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, ProjectorIcon, Search, Settings, User2} from "lucide-react"

import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup, SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader,
    SidebarMenu, SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator,
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import Image from "next/image";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={"/"}>
                                <Image
                                    src="./logo.svg"
                                    alt="Logo"
                                    width={20}
                                    height={20}
                                />
                                <span>Hamza Dev</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator/>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                    {item.title === 'Inbox' && (
                                        <SidebarMenuBadge>24</SidebarMenuBadge>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus/>
                        <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                        <ProjectorIcon/>
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem><SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="/">
                                    <Plus/>
                                    Add Project
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem><SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="/">
                                    <ProjectorIcon/>
                                    See All Projects
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/*Collapsible*/}
                <Collapsible defaultOpen={true} className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Collapseable Group
                                <ChevronDown
                                    className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/">
                                                <ProjectorIcon/>
                                                See All Projects
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem><SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="/">
                                            <Plus/>
                                            Add Project
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem><SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="/">
                                            <ProjectorIcon/>
                                            See All Projects
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
                {/*Nested*/}
                <SidebarGroup>
                    <SidebarGroupLabel>Nested Items</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus/>
                        <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                        <ProjectorIcon/>
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#">
                                                <Plus/>
                                                Add Project
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#">
                                                <Plus/>
                                                Add Project
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link href="/">
                                    <ProjectorIcon/>
                                    See All Projects
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2/>
                                    John Doe
                                    <ChevronUp className="ml-auto"/>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Account</DropdownMenuLabel>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Sign out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar