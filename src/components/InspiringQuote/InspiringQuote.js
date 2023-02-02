import { useEffect, useState } from 'react'

const quotes = [
	'Podróże otwierają umysły i serca do nowych doświadczeń i perspektyw.',
	'Podróżowanie to sposób na ucieczkę od rzeczywistości i odkrycie samego siebie.',
	'Nie jest ważne dokąd jedziesz, ale z kim.',
	'Podróżowanie to jedyny rzecz, którą możesz kupić, która będzie cię bogatsza.',
	'Nie ma nic bardziej inspirującego niż odkrywanie nowych miejsc i kultur.',
]

const styles = {
	fontStyle: 'italic',
	position: 'absolute',
	top: '0.5rem',
	left: 0,
	right: 0,
	textAlign: 'center',
	padding: '0 2rem',
	margin: '0 2rem',
	backgroundColor: 'rgba(87, 138, 157, 0.8)',
	color: 'white',
}

function InspiringQuote(props) {
	const [quote, setQuote] = useState('Wczytywanie cytatu')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(false)
	}, [])

	useEffect(() => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)])
	}, [loading])

	return <p style={styles}>{quote}</p>
}

export default InspiringQuote
