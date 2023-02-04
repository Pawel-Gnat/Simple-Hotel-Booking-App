import React from 'react'
import style from './Menu.module.css'
import useAuth from '../../hooks/useAuth'
import { Link, NavLink } from 'react-router-dom'

function Menu() {
	const [auth, setAuth] = useAuth()

	let activeClassName = style.menuItemActive

	const login = e => {
		e.preventDefault()
		setAuth(true)
	}

	const logout = e => {
		e.preventDefault()
		setAuth(false)
	}

	return (
		<div className={`${style.menuContainer}`}>
			<ul className={style.menu}>
				<li className={style.menuItem}>
					<NavLink to='/' className={({ isActive }) => (isActive ? activeClassName : undefined)}>
						Home
					</NavLink>
				</li>
				{auth ? (
					<>
						<li className={style.menuItem}>
							<NavLink to='/profil' className={({ isActive }) => (isActive ? activeClassName : undefined)}>
								Mój profil
							</NavLink>
						</li>
						<li className={style.menuItem}>
							<a href='#' onClick={logout}>
								Wyloguj się
							</a>
						</li>
					</>
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
