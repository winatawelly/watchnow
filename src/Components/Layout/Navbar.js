import React, {Fragment, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

const Navbar = () => {
    const [show,
        setShow] = useState(false)
    const collapseMenu = () => {
        if (show == false) {
            $("#navbarResponsive").addClass("show");
            setShow(true);
        } else {
            $("#navbarResponsive").removeClass("show");
            setShow(false);
        }

    }

    const collapseNavbar = () => {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            collapseNavbar();
        })
    })

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg fixed-top nav" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/">#WATCHNOW</Link>
                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        onClick={collapseMenu}>
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">View Code</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
