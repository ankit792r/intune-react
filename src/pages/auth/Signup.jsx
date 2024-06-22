import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
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
		<div className="card">
			<form className='card-body' onSubmit={handleSubmit}>
				<div className="card-title mb-3">
					<h4>Signup here</h4>
				</div>

				{
					error && (<div className="alert alert-danger my-3" role="alert">
						{error}
					</div>)
				}

				<div className="mb-3">
					<label for="name" className="form-label">Name</label>
					<input type="email" className="form-control" id="name" required 
						value={name} onChange={e => setname(e.target.value)} />
				</div>

				<div className="mb-3">
					<label for="username" className="form-label">Username</label>
					<input type="email" className="form-control" id="username" aria-describedby="usernameHelp" required
						value={email} onChange={e => setemail(e.target.value)} />
					<div id="usernameHelp" className="form-text">username should be unique</div>
				</div>

				<div className="mb-3">
					<label for="email" className="form-label">Email address</label>
					<input type="email" className="form-control" id="email" aria-describedby="emailHelp" required
						value={email} onChange={e => setemail(e.target.value)} />
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" required
						value={password} onChange={e => setpassword(e.target.value)} />
				</div>
				<div>
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to="/auth" className='btn btn-secondry'>Signin</Link>
				</div>
			</form>
		</div>

	)
}

export default Signup