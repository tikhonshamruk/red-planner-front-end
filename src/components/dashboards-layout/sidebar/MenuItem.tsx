import Link from "next/link";
import { IMenuItem } from "./menu.interface";

export function MenuItem({item}: {item: IMenuItem}) {
  return (
    <div>
        <Link href={item.link}>
        <item.icon></item.icon>
        <span>{item.name}</span>
        </Link>
    </div>
  )
}