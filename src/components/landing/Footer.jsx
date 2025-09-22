import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, FileText } from "lucide-react";

const FooterLink = ({ href, to, children }) => {
  const className =
    "block text-gray-400 hover:text-white transition-colors duration-200";
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

const SocialLink = ({ href, children }) => {
  return;
  <a
    href={href}
    className="w-10 h-10 bg-blue-950 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>;
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-950 rounded-md flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">Facturación App</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              La manera sencilla de crear y enviar facturas profesionales.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#caracteristicas">Caracteristicas</FooterLink>
              </li>
              <li>
                <FooterLink href="#testimonios">Testimonios</FooterLink>
              </li>
              <li>
                <FooterLink href="#Preguntas frecuentes">
                  Preguntas frecuentes
                </FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/about">Acerca de</FooterLink>{" "}
              </li>
              <li>
                <FooterLink to="/contact">Contacto</FooterLink>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/privacy">Politicas de privacidad</FooterLink>
              </li>
              <li>
                <FooterLink to="/terms">Terminos y condiciones</FooterLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">&copy; 2025 Facturacion App</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
