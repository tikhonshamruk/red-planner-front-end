import { NextRequest, NextResponse } from "next/server"
import { DASHBOARD_PAGES } from "./config/pages-url.config"

export async function middleware(
    request:NextRequest,
    response: NextResponse
){
    const {url, cookies} = request

    const accessToken = cookies.get('accessToken')?.value

    console.log('accessToken will be', accessToken)

    const isAuthPage = url.includes('/auth') // это показывает на какой мы странице

    if(isAuthPage && accessToken){
        return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME,url))
    }// если пользователь на isAuthPage и имеет токен, тогда перенаправляем его

    if(!isAuthPage && !accessToken){
        return NextResponse.redirect(new URL('auth',url))
    }
    
    return NextResponse.next()
}

export const config = {
    matcher: ['/i/:path*', '/auth/:path']
}