enum Priority {
    low,
    medium,
    high
}

export interface TasksDto{
    id?:string,
    createdAt?: Date,
    updatedAt? : Date,
    name?: string,
    priority?: Priority,
    isComleted?: boolean
}