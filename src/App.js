import React,{useState} from 'react';
import './App.less'
import {useSelector} from 'react-redux';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppRoutes } from './AppRoutes';
import { Loading } from './components/Loading';

export default function App() {
  // const [visible,setVisible]=useState(false)
  const isLoading = useSelector(state=>state.App.isLoading)
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
      <Loading isLoading={isLoading}/>
    </div>
  );
}