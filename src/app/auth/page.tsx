import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import{Auth} from './Auth'

export const metadata: Metadata = {
    title:'Auth',
    ...NO_INDEX_PAGE    
}

export default function AuthPage(){
    return <div className="bg-blue-500">Auth
        <Auth></Auth>
    </div>
}