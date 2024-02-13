import React from 'react';
import Menu from '../components/top-menu';
import Profile from '../components/profile';
import Contacts from '../components/contact-section';
import ProjectDetails from '../components/project_details';
import reportWebVitals from '../reportWebVitals';
import './projetosCss.css'

import imagem from '../components/media/projects/testeIMG.jpeg'
function ProjetosFE() {
  return (
    <>
      <Menu></Menu>
      <h2 className='main_title'>Projetos Front End</h2>
      <ProjectDetails
        img_path={imagem}
        title="titulo"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti doloribus numquam sit nemo debitis in fuga quis saepe eligendi amet, iusto, quidem libero modi commodi, tempora laborum provident quas."
        tecnologies={["HTML", "React", "python",'flask', 'cv']}
        live=""
        git="">
        
      </ProjectDetails>

      <Profile></Profile>
      <Contacts></Contacts>
    </>
  );
}

export default ProjetosFE;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();