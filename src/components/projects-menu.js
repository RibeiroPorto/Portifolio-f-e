import './projects-menu.css'
import backgroundFE from './media/responsive-2044921_1280.jpg'
import backgroundBE from './media/dean-pugh-C8NDn4xk9zs-unsplash.jpg'

function Projects(projects) {
  return (
    <>
    <h2 className='main-title'>Soluções em sistemas de Informação e automação.</h2>
    <section className="projects-section">
        <div className='porjects' style={{backgroundImage:"url("+backgroundFE+")"}}>
          <a href="/front_end"> <p>Front end</p></a></div>
        <div>
            <div><a href='/automacao'> <p>Automação</p></a></div>
            <div><a href="/outros"> <p>Outros</p></a></div>
        </div>
        <div style={{backgroundImage:"url("+backgroundBE+")"}}><a href="/back_end" > <p>Back end</p></a></div>
    </section>
    </>
  );
}

export default Projects;
