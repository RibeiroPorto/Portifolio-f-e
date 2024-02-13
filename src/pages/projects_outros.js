import React from 'react';
import Menu from '../components/top-menu';
import Profile from '../components/profile';
import Contacts from '../components/contact-section';
import './projetosCss.css'

import reportWebVitals from '../reportWebVitals';

function ProjetosOutros() {
    return (
      <>
      <Menu></Menu>
      <h2 className='main_title'>Outros Projetos</h2>
      <Profile></Profile>
      <Contacts></Contacts>
      </>
    );
  }
  
  export default ProjetosOutros;
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();