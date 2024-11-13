import { format } from "date-fns";
import { es } from "date-fns/locale";
import { FiClock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  return (
    <article className="card overflow-hidden group">
      <Link to={`/article/${article.id}`}>
        <div className="relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-0 right-0 bg-highlight text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
            {article.category}
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 group-hover:text-highlight transition-colors line-clamp-2">
            {article.title}
          </h2>
          <p className="text-text-secondary mb-4 line-clamp-3">
            {article.description}
          </p>
          <div className="flex justify-between items-center text-sm text-text-secondary">
            <span className="flex items-center space-x-1">
              <FiUser />
              <span>{article.author}</span>
            </span>
            <span className="flex items-center space-x-1">
              <FiClock />
              <time>
                {article.date
                  ? format(new Date(article.date), "dd MMM yyyy", { locale: es })
                  : "Fecha no disponible"}
              </time>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default NewsCard;