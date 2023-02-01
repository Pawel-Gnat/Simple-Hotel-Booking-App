import style from './Menu.module.css'
import AuthContext from '../../context/authContext'
import { useContext } from 'react'

function Menu() {
	const auth = useContext(AuthContext)

	const login = e => {
		e.preventDefault()
		auth.login()
	}

	const logout = e => {
		e.preventDefault()
		auth.logout()
	}

	return (
		<div className={`${style.menuContainer}`}>
			<ul className={style.menu}>
				<li className={style.menuItem}>
					<a href='#'>Home</a>
				</li>
				{auth.isAuthenticated ? (
					<li className={style.menuItem}>
						<a href='#' onClick={logout}>
							Wyloguj się
						</a>
					</li>
				) : (
					<li className={style.menuItem}>
						<a href='#' onClick={login}>
							Zaloguj się
						</a>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Menu
