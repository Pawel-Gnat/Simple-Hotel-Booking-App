import PropTypes from 'prop-types'
import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/hotel.jpg'
import ThemeContext from '../../../context/themeContext'
import { useContext } from 'react'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'

const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
}

function Hotel(props) {
	const theme = useContext(ThemeContext)
	const [auth] = useAuth()

	const clickHandler = e => {
		props.onOpen(props)
	}

	return (
		<div className={`card ${styles.hotel}`}>
			<div className='card-body'>
				<div className='row'>
					<div className='col-4'>
						<img src={hotelImg} alt='' className='img-fluid img-thumbnail' />
					</div>
					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className={styles.title}>{props.name}</p>
								<p className='badge badge-light text-dark'>{props.city}</p>
							</div>
							<div className='col text-end'>
								<h5>
									Ocena: <span className='badge bg-secondary'>{props.rating}</span>
								</h5>
								<Link
									to={`/hotele/${props.id}`}
									onClick={clickHandler}
									className={`btn btn-${theme.color} mt-2 px-5 float-end`}>
									Pokaż
								</Link>
								{/* <a href='#' onClick={clickHandler} className={`btn btn-${theme.color} mt-2 px-5 float-end`}>
									Pokaż
								</a> */}
							</div>
						</div>
					</div>
					<div className='col-12'>
						<p className={styles.description}>{props.description}</p>
						{auth ? (
							<p className='mt-2'>Dostępność: 4 pokoje</p>
						) : (
							<p className='mt-2'>Dostępność: wymagane zalogowanie</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

Hotel.propTypes = propTypes

export default Hotel
