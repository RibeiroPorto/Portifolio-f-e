import Menu from './components/top-menu.js'
import Projects from './components/projects-menu.js';
import Profile from './components/profile.js';
import Mywork from './components/my-work.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Projects />
      <Profile />
      <Mywork/>

    </div>
  );
}

export default App;
