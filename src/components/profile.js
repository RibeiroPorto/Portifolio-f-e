import './profile.css'
import perfil from './media/profile-pic (4).png'

function Profile() {
  return (
    <>
    <section className="profile">
        <div className="photo">
          <img src={perfil}></img>
        </div>
        <div className="info">
            <h3>Ola sou Vinicius e estou pronto para trabalhar no seu proximo projeto.</h3>
            <p>Sou desenvolvedor de sistemas, e trabalho com front-end, back-end,  e desenvolvi pequenos projetos com inteligencia artificial, inteligencia das coisas e robotica.</p>
            <a href='#contatos'>Entre em contato</a>
        </div>
    </section>
    </>
  );
}

export default Profile;
