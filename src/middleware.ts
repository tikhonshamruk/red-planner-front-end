import { NextRequest, NextResponse } from "next/server"
import { DASHBOARD_PAGES } from "./config/pages-url.config"

export async function middleware(
    request:NextRequest,
    response: NextResponse
){
    const {url, cookies} = request

    console.log(url, cookies)

    const accessToken = cookies.get('accessToken')?.value

    const isDashboardPage = url.includes('/i')
    const isAuthPage = url.includes('/auth')

    if(isAuthPage && accessToken){
        return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME))
    }
}

export const config = {
    matcher: ['/i/:path*', '/auth/:path']
}