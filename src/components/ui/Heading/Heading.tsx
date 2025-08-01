interface DtoHeading {
	title: string
}

export function Heading({ title }: DtoHeading) {
	return (
		<div>
			<h1 className='text-3xl font-medium'>Auth</h1>
			<div className='my-3 h-0.5 bg-border w-full' />
		</div>
	)
}
