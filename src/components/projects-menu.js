import './projects-menu.css'

function Projects(projects) {
  return (
    <>
    <h2 className='main-title'>Soluções em sistemas de Informação e automação.</h2>
    <section className="projects-section">
        <div className='porjects'><a href=""> <p>Front end</p></a></div>
        <div>
            <div><a href={projects}> <p>Automação</p></a></div>
            <div><a href=""> <p>Outros</p></a></div>
        </div>
        <div><a href=""> <p>Back end</p></a></div>
    </section>
    </>
  );
}

export default Projects;
