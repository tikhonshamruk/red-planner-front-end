import { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./header/Header";

export function DashboardLayout({children}:PropsWithChildren){
    return <div className="grid min-h-screen gird-cols-[1.2fr_6fr] 2xl:grid-cols-[1.1fr_6fr]">
        <Sidebar/>
        <main className="p-big-layout realite overflow-hidden">
            <Header></Header>
            {children}
        </main>
    </div>
}