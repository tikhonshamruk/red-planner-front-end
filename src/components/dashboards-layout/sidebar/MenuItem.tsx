import Link from "next/link";
import { IMenuItem } from "./menu.interface";

export function MenuItem({item}: {item: IMenuItem}) {
  return (
    <div>
        <Link href={item.link} className="flex gap-3 py-1.5 px-1.5 items-center transition-colors hover:bg-border rounded-lg">
        <item.icon></item.icon>
        <span>{item.name}</span>
        </Link>
    </div>
  )
}