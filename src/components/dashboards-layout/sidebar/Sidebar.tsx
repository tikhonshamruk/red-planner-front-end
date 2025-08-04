import Link from "next/link";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";
import { GanttChartSquare } from "lucide-react";
import { COLORS } from "@/constants/color.constants";

export function Sidebar(){
    return (
        <aside className="h-full flex flex-col justify-between text-white p-layout" >
            <div>
                <Link href='/' className="flex items-center gap-2.5 mb-7">
                <GanttChartSquare
						color={COLORS.primary}
						size={50}
					/>
                <span className="text-1.5xl font-bold">Pomodoro Planner</span>
                </Link>
                <div className="flex flex-col gap-2 text-right ">
                    {MENU.map(item => (
                        <MenuItem item={item} key={item.link}/>
                    ))}
                </div>
            </div>
            <footer>
                Footer
            </footer>
        </aside>
    )
}