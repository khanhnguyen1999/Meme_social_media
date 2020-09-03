import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {PATHS} from '../../constants'

export default function LoginForm({handleLogin}){
    const [form,setForm]=useState({email:'',password:''})
    const onChangeFormData = (keyField)=> (e) =>{ 
        setForm({
            ...form,
            [keyField]:e.target.value
        })
        console.log("key: ",keyField,"--- ",e.target.value)
    }
    const onSubmitForm = (e)=>{
        e.preventDefault();
        if(handleLogin){
            handleLogin(form)
        }
    }
    return (
        <div className="ass1-login__content">
                <p>Đăng nhập</p>
                <div className="ass1-login__form">
                    <form action="#">
                        <input onChange={onChangeFormData("email")} value={form.email} type="text" className="form-control" placeholder="Email" required=""/>
                        <input onChange={onChangeFormData("password")} value={form.password} type="password" className="form-control" placeholder="Mật khẩu" required=""/>
                        <div className="ass1-login__send">
                            <Link to={PATHS.REGISTER}>Đăng ký một tài khoản</Link>
                            <button
                            onClick={onSubmitForm}
                            type="submit"
                            className="ass1-btn"
                            >Đăng nhập</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}