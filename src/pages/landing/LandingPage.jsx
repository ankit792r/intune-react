import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()
    const authenticated = useSelector(state => state.user.authenticated);

    useEffect(() => {
        if (authenticated) {
            navigate("/home", {replace:true})
        }
    }, [authenticated])

    return (
        <div className='pt-5'>
            <div className="col-md-8 mx-auto text-center">
                <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" width="200" height="165" alt="Bootstrap" className="d-none d-sm-block mx-auto mb-3" />
                <h1 className="mb-3 fw-semibold lh-1">Build fast, responsive sites with&nbsp;Bootstrap</h1>
                <p className="lead mb-4">
                    Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.
                </p>

                <Link to="/auth" className="btn btn-lg btn-primary fw-semibold">signin</Link>
            </div>
        </div>
    )
}

export default LandingPage