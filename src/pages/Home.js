import Menu from "../components/top-menu";
import Projects from "../components/projects-menu";
import Profile from "../components/profile";
import Mywork from "../components/my-work";
import Contacts from "../components/contact-section";

function Home() {
  

  return (
    <>

      <Menu/>
      <Profile />
      <Projects></Projects>
      
      <Mywork/>
      <Contacts/>

    
    </>
  );
}

export default Home;