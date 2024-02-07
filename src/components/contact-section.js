import './contacts.css'


function Contacts() {
  return (
    <>
    <section className="contacts">
       <div>
        <p>Entre em contato :</p>
       </div>
       <address className='contato'>
        <a href='#'> <i class="fab fa-whatsapp"></i><p>+55 (31) 9 9898-4802</p></a>
        <a href='#'> <i class="fas fa-envelope"></i><p>portov394@gmail.com</p></a>
        
       </address>
       
    </section>
    <address id='contatos' className='social-networks'>
        <a href='#'><i class="far fa-paper-plane"></i></a>
        <a href='#'> <i class="fab fa-linkedin-in"></i></a>
        <a href='#'><i class="fab fa-github"></i> </a>
        <a href='#'><i class="fas fa-file"></i> </a>
    </address>
    </>
  );
}

export default Contacts;