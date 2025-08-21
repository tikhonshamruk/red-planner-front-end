enum Priority {
	low = 'low',
	medium = 'medium',
	high = 'high'
}

export interface TasksDto {
	id: string
	createdAt?: string
	updatedAt?: string
	name?: string
	priority?: Priority
	isComleted?: boolean
}

export interface CreateTaskDto{
	createdAt: string,
	name?: string, 
	isComleted: boolean
}
