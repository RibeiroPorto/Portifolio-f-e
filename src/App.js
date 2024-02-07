import Menu from './components/top-menu.js'
import Projects from './components/projects-menu.js';
import Profile from './components/profile.js';
import Mywork from './components/my-work.js';
import Contacts from './components/contact-section.js';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Project from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Menu />
      <Projects projects = {{Project}} />
      <Profile />
      <Mywork/>
      <Contacts/>

    </div>
  );
}

export default App;
