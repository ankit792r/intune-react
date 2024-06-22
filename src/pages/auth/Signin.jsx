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
		<div className="card">
			<form className='card-body' onSubmit={handleSubmit}>
				<div className="card-title mb-3">
					<h4>Signin here</h4>
				</div>

				{
					error && (<div className="alert alert-danger my-3" role="alert">
						{error}
					</div>)
				}

				<div className="mb-3">
					<label for="email" className="form-label">Email address</label>
					<input type="email" className="form-control" id="email" aria-describedby="emailHelp" required
						value={email} onChange={e => setemail(e.target.value)} />
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3">
					<label for="password" className="form-label">Password</label>
					<input type="password" className="form-control" id="password" required
						value={password} onChange={e => setpassword(e.target.value)} />
				</div>
				<div>
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to="/auth/signup" className='btn btn-secondry'>Signup</Link>
				</div>
			</form>
		</div>
	)
}

export default Signin