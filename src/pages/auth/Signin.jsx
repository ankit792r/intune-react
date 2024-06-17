import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userSignin } from '../../redux/user/userReducer'

const Signin = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const status = useSelector(state => state.user.status);
	const error = useSelector(state => state.user.error);
	const authenticated = useSelector(state => state.user.authenticated);

	const [email, setemail] = useState("")
	const [password, setpassword] = useState("")

	useEffect(() => {
		if (authenticated) {
			navigate("/home")
		}
	}, [authenticated])

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(userSignin({ email, password }))
	}

	return (
		<div>
			<h4>Signin here</h4>
			<p>{error}</p>
			<form onSubmit={handleSubmit}>
				<input required autoFocus type="text" placeholder='email' value={email} onChange={e => setemail(e.target.value)} /> <br />
				<input required  type="text" placeholder='password' value={password} onChange={e => setpassword(e.target.value)} /> <br />

				<input type="submit" value='submit' />
			</form>

			<br />
			<Link to="/auth/signup">signup</Link>
		</div>
	)
}

export default Signin