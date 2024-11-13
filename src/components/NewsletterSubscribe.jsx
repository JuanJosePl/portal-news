import { useState } from 'react';
import { FiMail } from 'react-icons/fi';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Suscrito:', email);
    setEmail('');
  };

  return (
    <section className="bg-dark-accent py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-headline">Suscríbete a nuestro boletín</h2>
          <p className="text-text-secondary mb-6">
            Recibe las últimas noticias directamente en tu bandeja de entrada.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow relative">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-dark-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-highlight pl-10"
                required
              />
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
            </div>
            <button type="submit" className="btn btn-primary">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;