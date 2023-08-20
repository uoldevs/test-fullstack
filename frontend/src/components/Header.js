import icon from '../icons/uol.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src={icon} alt="icone Uol" className="icon" />
    </div>
  );
}

export default Header;
