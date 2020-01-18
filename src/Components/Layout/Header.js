import React, {Fragment} from 'react'
import Typical from 'react-typical'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase"><Typical steps={['Watch', 1000, 'WatchNow', 500]} loop={2} wrapper="p"/></h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">Your next favourite movies,
                        <br/>just a few steps away.</h2>
                    <Link to="/recommend" className="btn btn-primary js-scroll-trigger">Get Started</Link>
                </div>
            </div>
        </header>

    )
}

export default Header
