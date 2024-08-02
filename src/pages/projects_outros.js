import React from 'react';
import Menu from '../components/top-menu';
import Profile from '../components/profile';
import Contacts from '../components/contact-section';
import './projetosCss.css'

import reportWebVitals from '../reportWebVitals';
import wip from '../components/media/icons/work-in-progress.png'

function ProjetosOutros() {
    return (
      <>
      <Menu></Menu>
      <h2 className='main_title'>Outros Projetos</h2>
      <h2 className='main_title'>Esta pagina está em construção</h2>
      <div className='work-in-progress'><img src={wip}></img></div>
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