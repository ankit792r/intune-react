import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../redux/auth/authReducer'
import { userSignup } from '../../redux/user/userReducer'

const Signup = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const error = useSelector(state => state.user.error);
	const auth = useSelector(state => state.user.auth);


	const [name, setname] = useState("")
	const [username, setusername] = useState("")
	const [email, setemail] = useState("")
	const [password, setpassword] = useState("")

	useEffect(() => {
		if (auth) {
			navigate("/auth")
		}
	}, [auth])

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(userSignup({ name, username, email, password }))
	}

	return (
		<div>
			<h4>Signup here</h4>
			<p>{error}</p>
			<form onSubmit={handleSubmit}>
				<input required autoFocus type="text" placeholder='name' value={name} onChange={e => setname(e.target.value)} /> <br />
				<input required type="text" placeholder='username' value={username} onChange={e => setusername(e.target.value)} /> <br />
				<input required type="text" placeholder='email' value={email} onChange={e => setemail(e.target.value)} /> <br />
				<input required type="text" placeholder='password' value={password} onChange={e => setpassword(e.target.value)} /> <br />

				<input type="submit" value='submit' />
			</form>

			<br />
			<Link to="/auth">signin</Link>
		</div>
	)
}

export default Signup