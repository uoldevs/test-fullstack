import icon from '../icons/uol.png';
import './css/Header.css';

function Header() {
  return (
    <div className="header">
      <img src={icon} alt="icone Uol" className="icon" />
    </div>
  );
}

export default Header;
