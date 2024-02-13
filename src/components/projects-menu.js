import './projects-menu.css'
import backgroundFE from './media/responsive-2044921_1280.jpg'
import backgroundBE from './media/laptop-1839876_1280.jpg'
import backgroundAuto from './media/Imagem1.jpg'
import backgroundOutros from './media/idea-2558678_1280.jpg'
function Projects(projects) {
  return (
    <>
    <h2 className='main-title'>Soluções em sistemas de Informação e automação.</h2>
    <section className="projects-section">
        <div className='porjects' style={{backgroundImage:"url("+backgroundFE+")"}}>
          <a href="/front_end"> <p>Front end</p></a></div>
        <div>
            <div style={{backgroundImage:"url("+backgroundAuto+")"}}><a href='/automacao'> <p>Automação</p></a></div>
            <div style={{backgroundImage:"url("+backgroundOutros+")"}}><a href="/outros"> <p>Outros</p></a></div>
        </div>
        <div style={{backgroundImage:"url("+backgroundBE+")"}}><a href="/back_end" > <p>Back end</p></a></div>
    </section>
    </>
  );
}

export default Projects;
