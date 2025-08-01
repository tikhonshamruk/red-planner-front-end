export interface AuthDto {
	email: string,
	password: string
}

export interface AuthResponse{
    id: string,
    createdAt: Date,
    updateAt: Date,
    email: string,
    name?: string,
    workInternal?: number,
    breakInterval?: number,
    intervalsCount?: number
}



export interface BothRespones{
    user: AuthResponse,
    accessToken?: string
}

/*--------------Profile-------------*/

export interface ProfileDto{
    user: AuthResponse,
    statistics: {
        labe: string,
        value: string
    }[]
}


export interface UpdateUserDto{
    email?: string,
    name?: string,
    password?: string,
    workInternal?: number,
    breakInternal?: number,
    intervalsCount?: number
}

//Интерфейс для TimeBlock
export interface TimeBlockDto{
    id: string,
    createdAt: Date,
    updatedAt: Date,
    name: string,
    color?: string,
    duration: number,
    order: number,
}

export interface ArrayTimeBlocksDto{
    time_blocks: TimeBlockDto[]
}