import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./Home";
import ProjetosFE from "./projects_front-end";
import ProjetosBE from "./projects_back-end";
import ProjetosAuto from "./projects_automação";
import ProjetosOutros from "./projects_outros";


const Routs = () => {
    return (
        <Router>
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/front_end" element={<ProjetosFE />} />
                <Route exact path="/back_end" element={<ProjetosBE />} />
                <Route exact path="/automacao" element={<ProjetosAuto />} />
                <Route exact path="/outros" element={<ProjetosOutros />} />
            </Routes>
        </Router>
        // <Router>

        //     <Routes>
        //         <Route exact path="/" element={<Home />} />

        //         <Route path="/Projetos" element={<Projetos />} />

        //     </Routes>
        // </Router>
    )
}

export default Routs;