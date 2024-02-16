
import "./project_details.css"
import htmlIcon from './media/icons/html.svg'
import cssIcon from './media/icons/css.svg'
import jsIcon from './media/icons/js.svg'
import pyIcon from './media/icons/python.svg'
import reactIcon from './media/icons/react.svg'
import TFIcon from './media/icons/tensorflow.svg'
import flaskIcon from './media/icons/flask.svg'
import cvIcon from './media/icons/cv.svg'
import djIcon from './media/icons/django.svg'
import liveIcon from './media/icons/live.svg'
import gitIcon from './media/icons/git.svg'
import arduinoIcon from './media/icons/arduino.svg'

function ProjectDetails({ img_path, title, description, tecnologies, live, git }) {
    return (
        <div className="project_detailed">
            <img src={img_path} alt="project"></img>
            <div className="project_description">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="technologies">
                    <p>Tecnologias utilizadas:</p>
                    {tecnologies.map(item => {
                        var icon = ''
                        switch (item.toLowerCase()) {
                            case "html":
                                icon = <img src={htmlIcon}></img>
                                break;
                            case "css":
                                icon = <img src={cssIcon}></img>
                                break;
                            case "js":
                                icon = <img src={jsIcon}></img>
                                break;
                            case "react":
                                icon = <img src={reactIcon}></img>
                                break;
                            case "python":
                                icon = <img src={pyIcon}></img>
                                break;
                            case "tensorflow":
                                icon = <img src={TFIcon}></img>
                                break;
                            case "flask":
                                icon = <img src={flaskIcon}></img>
                                break;
                            case "django":
                                icon = <img src={djIcon}></img>
                                break;
                            case "cv":
                                icon = <img src={cvIcon}></img>
                                break;
                            case "arduino":
                                icon = <img src={arduinoIcon}></img>
                                break;
                        }
                        return (<div className="tecnology-div">{icon}
                            <p>{item}</p>
                        </div>)
                    })}
                </div>
                <div className="links">
                    <div>
                        <a href={live} className="tooltip">
                            <img src={liveIcon}></img>
                            <span class="tooltiptext">Live website</span>

                        </a>
                    </div>
                    <div>
                        <a className="tooltip" href={git}>
                            <img src={gitIcon}>
                            </img>
                            <span class="tooltiptext">Repositorio Git</span>
                            <p></p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectDetails;
