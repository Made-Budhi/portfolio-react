import {type LucideIcon} from "lucide-react";
import {SidebarMenuButton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem} from "@/components/ui/sidebar.tsx";

interface SidebarNavItemProps {
    title: string,
    link?: string,
    Icon: LucideIcon,
    collapsible?: { title: string, link: string }[],
}

function NavMenu({title, link, Icon, collapsible}: SidebarNavItemProps) {
    if (collapsible) {
        return (
            <>
                <SidebarMenuButton>
                    {Icon && <Icon/>}
                    <span className={"font-semibold"}>{title}</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                    {collapsible.map((item) => (
                        <a href={item.link}>
                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                    <span>{item.title}</span>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </a>
                    ))}
                </SidebarMenuSub>
            </>
        )
    } else {
        return (
            <a href={link}>
                <SidebarMenuButton>
                    {Icon && <Icon/>}
                    <span className={"font-semibold"}>{title}</span>
                </SidebarMenuButton>
            </a>
        )
    }
}

export default NavMenu;