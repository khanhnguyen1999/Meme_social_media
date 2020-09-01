import React from 'react'
import {Link} from 'react-router-dom'
import {PATHS} from '../../constants'

export default function LoginForm(){
    return (
        <div className="ass1-login__content">
                <p>Đăng nhập</p>
                <div className="ass1-login__form">
                    <form action="#">
                        <input type="text" className="form-control" placeholder="Email" required=""/>
                        <input type="password" className="form-control" placeholder="Mật khẩu" required=""/>
                        <div className="ass1-login__send">
                            <Link to={PATHS.REGISTER}>Đăng ký một tài khoản</Link>
                            <button type="submit" className="ass1-btn">Đăng nhập</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}