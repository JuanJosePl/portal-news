import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = ({ featuredArticle }) => {
  if (!featuredArticle) {
    return null;
  }

  return (
    <section className="relative h-[60vh] overflow-hidden mb-12">
      <img
        src={featuredArticle.image}
        alt={featuredArticle.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/70 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-headline">
            {featuredArticle.title}
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-6 line-clamp-3">
            {featuredArticle.description}
          </p>
          <Link
            to={`/article/${featuredArticle.id}`}
            className="btn btn-primary inline-flex items-center space-x-2"
          >
            <span>Leer más</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;