import React from "react";
import { Button, notification } from 'antd';
import {useHistory} from 'react-router-dom'
import {PATHS} from '../../constants'

export default function Header() {
  const history = useHistory()
  const handleDelete = ()=>{
    // console.log("")
    if(localStorage){
      localStorage.removeItem("ACCESS_TOKEN");
      history.push(PATHS.LOGIN)
      window.location.reload()
    }
  }
  return (
    <header>
      <button onClick={handleDelete}>click</button>
      <h1>Header</h1>
    </header>
  )
}