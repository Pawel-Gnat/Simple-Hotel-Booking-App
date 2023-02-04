import ProfileDetails from './ProfileDetails/ProfileDetails'
import MyHotels from './MyHotels/MyHotels'
import ProfileContainer from './ProfileContainer/ProfileContainer'
import { Route, Routes, NavLink, Outlet } from 'react-router-dom'

export default function Profile(props) {
	// const { path, url } = useRouteMatch()

	// console.log(url)

	return (
		<div className='card'>
			<div className='card-header'>
				<h2>Moj profil</h2>
			</div>
			<div className='card-body'>
				<ul className='nav nav-tabs'>
					<li className='nav-item'>
						{/* <NavLink className='nav-link active' end to={`${url}`}> */}
						<NavLink className='nav-link active' end to='/profil'>
							Profil
						</NavLink>
					</li>
					<li className='nav-item'>
						{/* <NavLink className='nav-link' to={`${url}/hotele`}> */}
						{/* <NavLink className='nav-link' to='/profil/hotele'> */}
						<NavLink className='nav-link' to='/profil/hotele'>
							Hotele
						</NavLink>
					</li>
				</ul>

				{/* <div className='pt-4'> */}
				{/* <Routes> */}
				{/* <Route path='' element={<ProfileDetails />} /> */}
				{/* <Route path='/profil/hotele' element={<MyHotels />} /> */}

				{/* <Route path='/' element={<Profile />}>
							<Route path='' element={<ProfileDetails />} />
							<Route path='hotele' element={<MyHotels />} />
						</Route> */}
				{/* </Routes> */}
				{/* <Outlet /> */}
				{/* </div> */}

				<ProfileContainer />

				<Routes>
					<Route path='profil' element={<ProfileContainer />}>
						<Route path='' element={<ProfileDetails />} />
						<Route path='hotele' element={<MyHotels />} />
					</Route>
				</Routes>
			</div>
		</div>
	)
}
