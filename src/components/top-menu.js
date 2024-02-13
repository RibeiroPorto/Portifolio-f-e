import './top-menu.css'


function Menu() {
  return (
    <div className="menu">
      <div className='tooltip'><a href='/'><i class="fas fa-globe-americas"></i></a>
        <span class="tooltiptext">Home</span></div>
      <a href='#contatos'>Contatos</a>
    </div>
  );
}

export default Menu;
