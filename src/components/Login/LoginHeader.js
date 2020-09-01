import React from 'react'
import {Link} from 'react-router-dom'
import {PATHS} from '../../constants'

export default function LoginHeader(){
    return (
        <div className="ass1-login__logo">
            <Link to={PATHS.HOMEPAGE} className="ass1-logo">TCL Meme</Link>
        </div>
    )
}