import { useEffect, useState } from 'react'
import moment from 'moment/moment'

const BestHotel = props => {
	const [time, setTime] = useState('')
	const endTime = moment().add(23, 'minutes').add(34, 'seconds')
	const hotel = props.getHotel()
	let interval = null

	useEffect(() => {
		interval = setInterval(() => {
			const leftTime = -moment().diff(endTime) / 1000
			const minutes = Math.floor(leftTime / 60)
			const seconds = Math.floor(leftTime % 60)
			setTime(`${minutes} minut oraz ${seconds} sekund`)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<div className='card bg-success text-white'>
			<div className='card-header'>
				<p>Najlepsza oferta!</p>
			</div>
			<div className='card-body'>
				<div className='d-flex justify-content-between'>
					<h5 className='card-title'>{hotel.name}</h5>
					<h6 className='card-subtitle'>{hotel.rating}</h6>
				</div>
				<p>Do końca oferty pozostało: {time}</p>
				<a href='#' className='btn btn-sm btn-light'>
					Pokaż
				</a>
			</div>
		</div>
	)
}

export default BestHotel
