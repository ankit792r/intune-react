import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../redux/auth/authReducer'

const Signup = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const status = useSelector(state => state.auth.status);
	const error = useSelector(state => state.auth.error);
	const authenticated = useSelector(state => state.auth.authenticated);


	const [name, setname] = useState("")
	const [username, setusername] = useState("")
	const [email, setemail] = useState("")
	const [password, setpassword] = useState("")

	useEffect(() => {
		if (authenticated) {
			navigate("/home")
		}
	}, [status, authenticated])

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(signup({ name, username, email, password }))
	}

	return (
		<div>
			<h4>Signup here</h4>
			<p>{error}</p>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='name' value={name} onChange={e => setname(e.target.value)} /> <br />
				<input type="text" placeholder='username' value={username} onChange={e => setusername(e.target.value)} /> <br />
				<input type="text" placeholder='email' value={email} onChange={e => setemail(e.target.value)} /> <br />
				<input type="text" placeholder='password' value={password} onChange={e => setpassword(e.target.value)} /> <br />

				<input type="submit" value='submit' />
			</form>

			<br />
			<Link to="/auth">signin</Link>
		</div>
	)
}

export default Signup