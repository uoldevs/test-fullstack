import './footer.css';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>Desenvolvido por:</p>
        <p><FaGithub/> Queite Schneider Castiglioni</p>
      </div>
      <span> &copy; 2023 Todos os direitos reservados.</span>
    </footer>
  )
}

export default Footer;