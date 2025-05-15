import {SidebarMenu} from "@/components/ui/sidebar.tsx";
import type {NavItem} from "@/components/nav-layout/nav-item-type.tsx";
import NavMenu from "@/components/nav-layout/nav-menu.tsx";

type NavContentProps = {
    items: NavItem[];
}

function NavContent({items} : NavContentProps){
    return(
        <SidebarMenu>
            {items.map((item) => {
                return (
                    <NavMenu
                        title={item.title}
                        link={item.link}
                        Icon={item.icon}
                        collapsible={item.items}
                    />
                )
            })}
        </SidebarMenu>
    )
}

export default NavContent;