import './contact-section.css'


function Contacts() {
  return (
    <>
      <section className="contacts">
        <div>
          <p>Entre em contato :</p>
        </div>
        <address className='contato'>
          <a target='_blank' href='tel:+5531998984802'> <i className="fa-solid fa-phone"></i><p>+55 (31) 9 9898-4802</p></a>
          <a target='_blank' href='https://web.whatsapp.com/send?phone=+5531998984802'> <i className="fa-brands fa-whatsapp"> </i><p>+55 (31) 9 9898-4802</p></a>
          <a target='_blank' href='mailto:portov394@gmail.com'> <i className="fas fa-envelope"></i><p>portov394@gmail.com</p></a>

        </address>

      </section>
      <address id='contatos' className='social-networks'>
        <a target='_blank' href='mailto:vinirl4@montich.com'><i className="far fa-paper-plane"></i></a>
        <a target='_blank' href='https://www.linkedin.com/in/vinicius-ribeiro-8676b9234/'> <i className="fab fa-linkedin-in"></i></a>
        <a target='_blank' href='https://github.com/RibeiroPorto'><i className="fab fa-github"></i> </a>
        <a target='_blank' href='https://drive.google.com/file/d/19TnmUvvNQbjh6HTC_aVEBU1gVFcdGbD4/view?usp=sharing'><i className="fas fa-file"></i> </a>
      </address>
    </>
  );
}

export default Contacts;