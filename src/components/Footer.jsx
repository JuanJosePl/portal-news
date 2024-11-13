import { FiGithub, FiTwitter, FiLinkedin, FiGlobe, FiMail, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-secondary mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FiGlobe className="text-highlight text-3xl" />
              <span className="text-2xl font-bold text-highlight font-headline">NewsPortal</span>
            </Link>
            <p className="text-text-secondary">
              Tu fuente confiable de noticias e información actualizada.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><Link to="/category/Tecnología" className="text-text-secondary hover:text-highlight">Tecnología</Link></li>
              <li><Link to="/category/Ciencia" className="text-text-secondary hover:text-highlight">Ciencia</Link></li>
              <li><Link to="/category/Deportes" className="text-text-secondary hover:text-highlight">Deportes</Link></li>
              <li><Link to="/category/Entretenimiento" className="text-text-secondary hover:text-highlight">Entretenimiento</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-text-secondary hover:text-highlight">Sobre Nosotros</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-highlight">Contacto</Link></li>
              <li><Link to="/privacy" className="text-text-secondary hover:text-highlight">Política de Privacidad</Link></li>
              <li><Link to="/terms" className="text-text-secondary hover:text-highlight">Términos de Uso</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-text-secondary">
                <FiMail />
                <span>info@newsportal.com</span>
              </li>
              <li className="flex items-center space-x-2 text-text-secondary">
                <FiPhone />
                <span>+1 234 567 890</span>
              </li>
            </ul>
            <h4 className="text-lg font-semibold text-text-primary mt-4 mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-highlight">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="text-text-secondary hover:text-highlight">
                <FiGithub size={24} />
              </a>
              <a href="#" className="text-text-secondary hover:text-highlight">
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-dark-accent mt-8 pt-8 text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} NewsPortal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;