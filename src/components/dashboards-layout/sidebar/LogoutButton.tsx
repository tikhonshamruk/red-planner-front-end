// 'use client'

// import { authService } from "@/services/auth.service";
// import { useMutation } from "@tanstack/react-query";
// import { useRouter } from "next/router";

// export function LogoutButton() {

//     const router = useRouter()

//     const {mutate} = useMutation(
//         mutationKey: ['logout'],
// 		mutationFn: () => authService.logout(),
// 		onSuccess: () => router.push('/auth')
//     )

//   return <div>LogoutButton</div>;
// }