import React from 'react';
import Menu from '../components/top-menu';
import Profile from '../components/profile';
import Contacts from '../components/contact-section';
import './projetosCss.css'

import ProjectDetails from '../components/project_details';
import reportWebVitals from '../reportWebVitals';


import projectmng from '../components/media/projects/projectmng.png'
function ProjetosBE() {
    return (
      <>
      <Menu></Menu>
      <ProjectDetails
      img_path={projectmng}
      title='Project Management System'
      description='Este projeto, que ainda está em desenvolvimento, é um sistema de gerenciamento de projetos que estou desenvolvendo com implementação de banco de dados, gerenciamento de projetos e atividades por projeto, acompanhamento de progresso e agendamento de reuniões relacionadas aos projetos.
      O sistema também possui sistema de login e criação de usuários e hierarquia de usuários.'
      tecnologies={["HTML","CSS","JS","python", "flask"]}
      live={'http://viniciuspr.pythonanywhere.com/'}
      git={"https://github.com/RibeiroPorto/Project_Management_system"}
      >
      </ProjectDetails>
      <Profile></Profile>
      <Contacts></Contacts>
      </>
    );
  }
  
  export default ProjetosBE;
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();