import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Resetear el formulario
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-highlight font-headline">Contacto</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Estamos aquí para escucharte. Si tienes alguna pregunta, sugerencia o simplemente quieres ponerte en contacto con nosotros, no dudes en utilizar cualquiera de los siguientes métodos:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <FiMail className="text-highlight" />
              <span>info@newsportal.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone className="text-highlight" />
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMapPin className="text-highlight" />
              <span>123 Calle Ejemplo, Ciudad, País</span>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-dark-accent text-text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-dark-accent text-text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 bg-dark-accent text-text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;