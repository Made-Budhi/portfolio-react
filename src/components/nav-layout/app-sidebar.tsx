import {
    Sidebar,
    SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton,
} from "@/components/ui/sidebar.tsx"

import {BookCheck, CircleUserRound, FolderGit2, GraduationCap, Hexagon, Wrench} from "lucide-react"
import NavContent from "@/components/nav-layout/nav-content.tsx";
import type {NavItem} from "@/components/nav-layout/nav-item-type.tsx";

const data: NavItem[] = [
    // Profile
    {
        title: 'Profile',
        link: '#profile',
        icon: CircleUserRound,
    },
    // Projects
    {
        title: 'Projects',
        link: '#projects',
        icon: FolderGit2,
        items: [
            {
                title: 'Current Project',
                link: '#',
            },
            {
                title: 'SIDEWI Bali',
                link: '#',
            },
            {
                title: 'BROOM',
                link: '#',
            }
        ]
    },
    // Skills
    {
        title: 'Skills',
        link: '#skills',
        icon: Wrench
    },
    // Education
    {
        title: 'Educations',
        link: '#educations',
        icon: GraduationCap,
    },
    // Certificates
    {
        title: 'Certificates',
        link: '#certificates',
        icon: BookCheck,
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible={"icon"}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuButton>
                            <Hexagon />
                            <span className={"font-semibold"}>Made Budhi</span>
                        </SidebarMenuButton>
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <NavContent items={data}></NavContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
