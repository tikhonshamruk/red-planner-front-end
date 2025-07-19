export interface AuthDto {
	email: string,
	password: string
}

export interface AuthResponse{
    id: string,
    createdAt: number,
    updateAt: number,
    email: string,
    name?: string,
    workInternal?: number,
    breakInterval?: number,
    intervalsCount?: number
}