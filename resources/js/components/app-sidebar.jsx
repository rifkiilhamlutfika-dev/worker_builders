import * as React from "react";
import {
    BookOpen,
    Bot,
    Command,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    Settings2,
    SquareTerminal,
    PaperclipIcon,
    HomeIcon,
    Paperclip,
    Dock,
    Aperture,
    StarIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "https://awsimages.detik.net.id/community/media/visual/2017/06/22/c5f6a4b7-d06e-4512-b239-0b7d4d31714e.jpg?w=600&q=90",
    },
    navPages: [
        {
            title: "Dashboard",
            icon: HomeIcon,
            url: "/",
        },
    ],
    navMain: [
        {
            title: "CV",
            icon: PaperclipIcon,
            items: [
                {
                    title: "Make New CV",
                    url: "#",
                },
                {
                    title: "See All CV",
                    url: "#",
                },
            ],
        },
        {
            title: "Resume",
            icon: Dock,
            items: [
                {
                    title: "Make New Resume",
                    url: "#",
                },
                {
                    title: "See All Resume",
                    url: "#",
                },
            ],
        },
        {
            title: "Portofolio",
            icon: Aperture,
            items: [
                {
                    title: "Make New Portfolio",
                    url: "#",
                },
                {
                    title: "See All Portolio",
                    url: "#",
                },
            ],
        },
    ],
    navMe: [
        {
            title: "Give Rating This App",
            icon: StarIcon,
            url: "",
        },
    ],
};

export function AppSidebar({ ...props }) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarContent>
                <NavSecondary items={data.navPages} />
                <NavMain items={data.navMain} GroupLabel="Features" />
                <NavSecondary items={data.navMe} className="mt-auto" />
            </SidebarContent>

            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
