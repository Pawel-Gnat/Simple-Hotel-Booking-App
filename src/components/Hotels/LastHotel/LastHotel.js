function LastHotel(props) {
	return (
		<div className='card mb-2 bg-light'>
			<div className='card-header'>
				<p>Ostatnio oglądałeś ten hotel. Wciąż zainteresowany?</p>
			</div>
			<div className='card-body'>
				<div className='d-flex justify-content-between'>
					<h5 className='card-title'>{props.name}</h5>
					<h6 className='card-subtitle'>{props.city}</h6>
				</div>
				<div style={{ width: '100px' }} className='ms-auto d-flex justify-content-between'>
					<button href='#' className='btn btn-sm btn-dark'>
						Tak
					</button>
					<button href='#' onClick={props.onRemove} className='btn btn-sm btn-dark'>
						Nie
					</button>
				</div>
			</div>
		</div>
	)
}

export default LastHotel
