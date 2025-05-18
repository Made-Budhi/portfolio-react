import * as React from "react";
import {SidebarProvider, SidebarTrigger, SidebarInset} from "@/components/ui/sidebar.tsx";
import {AppSidebar} from "@/components/nav-layout/app-sidebar.tsx";
import { Analytics } from '@vercel/analytics/react';
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";

function App({children} : {children:React.ReactNode}) {
    return (
        <ThemeProvider>
            <SidebarProvider>
               <AppSidebar />

                <SidebarInset>
                    <nav className={"bg-sidebar/80 backdrop-blur-sm w-full py-2.5 fixed border-b-1 border-sidebar-border/60 z-10 flex flex-row-reverse lg:block"}>
                        <SidebarTrigger />
                        <ModeToggle />
                    </nav>

                    <main className={"lg:flex lg:justify-center pt-4 px-8 mt-12"}>
                        {children}
                    </main>
                </SidebarInset>
                <Analytics />
            </SidebarProvider>
        </ThemeProvider>
    )
}

export default App;