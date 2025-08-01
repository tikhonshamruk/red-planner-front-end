'use client'



import Loader from '@/components/ui/Loader'
import { useProfile } from '@/hooks/useProfile'

export function Statistics() {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		<Loader />
	) : (
		<div className='flex gap-3 justify-between'>
			{data?.data.statistics.length ? (
				data.data.statistics.map((statistic, index) => (
					<div
						key={index}
						className='bg-border/5 rounded flex flex-col items-center px-9 py-6 mt-7 text-gray-700 hover:translate-y-3 transition-transform duration-500'
					>
						<div className='text-xl'>{statistic.label}</div>
						<div className='text-3xl font-semibold'>{statistic.value}</div>
					</div>
				))
			) : (
				<div>Statistics not loaded!</div>
			)}
		</div>
	)
}
