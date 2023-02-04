export default function Login() {
	return (
		<div>
			<h2>Logowanie</h2>
			<form>
				<div className='form-group'>
					<label>Email</label>
					<input type='email' className='form-control'></input>
				</div>
				<div className='form-group'>
					<label>Hasło</label>
					<input type='password' className='form-control'></input>
				</div>
				<button className='btn btn-primary mt-2'>Zapisz</button>
			</form>
		</div>
	)
}
