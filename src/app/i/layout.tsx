import { DashboardLayout } from "@/components/dashboards-layout/DashboardLayout";
import { LayoutProps } from "../../../.next/types/app/layout";
import { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren<unknown>){
    return (<DashboardLayout>
        {children}
    </DashboardLayout>)
}