import type {LucideIcon} from "lucide-react";

export type NavItem = {
    title: string;
    link: string;
    icon: LucideIcon;
    items?: {
        title: string,
        link: string,
    }[];
};
