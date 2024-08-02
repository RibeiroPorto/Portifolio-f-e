import React from 'react';
import Menu from '../components/top-menu';
import Profile from '../components/profile';
import Contacts from '../components/contact-section';
import ProjectDetails from '../components/project_details';
import reportWebVitals from '../reportWebVitals';
import './projetosCss.css'

import countries from '../components/media/projects/countries.png'
import apiAdress from '../components/media/projects/apiAdress.png'


import landingPage from '../components/media/projects/landingPage.png'

function ProjetosFE() {
  return (
    <>
      <Menu></Menu>
      <h2 className='main_title'>Projetos Front End</h2>
      
      <ProjectDetails
        img_path={countries}
        title="Countries API"
        description="Nesse projeto eu implementei um sistema que faz consultas à uma API, obtendo dados sobre os paises do mundo e exibe os dados de formaorganizada para o bom intendimento do usuario."
        tecnologies={["HTML","CSS","JS", "React", ]}
        live="https://countries-api-lei4dmoss-ribeiroportos-projects.vercel.app/"
        git="https://github.com/RibeiroPorto/countries-api-fem.git">
        
      </ProjectDetails>

      <ProjectDetails
      img_path={apiAdress}
      title='IP adress tracker'
      description='Nesse projeto desenvolvi um sistema que consulta uma api que identifica o endereço referente à um IP e exibe a localização no mapa.Passando por validações e formatações de dados.'
      tecnologies={["HTML","CSS","JS" ]}
      live={'https://ribeiroporto.github.io/Front-end-Mentor-Ip-Adress-Tracker/'}
      git={"https://github.com/RibeiroPorto/Front-end-Mentor-Ip-Adress-Tracker.git"}
      >
      </ProjectDetails>
      <ProjectDetails
      img_path={landingPage}
      title='Huddle landing page'
      description='Esse projeto trate-se de uma simples demosntração de uma landing page que desenvolvi com HTML e CSS.'
      tecnologies={["HTML","CSS" ]}
      live={'https://ribeiroporto.github.io/FEM---Huddle-landing-page/'}
      git={"https://github.com/RibeiroPorto/FEM---Huddle-landing-page"}
      >
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