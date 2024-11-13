import { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import HeroSection from '../components/HeroSection';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import { FiTrendingUp } from 'react-icons/fi';

const Home = () => {
  const [featuredNews, setFeaturedNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        // Simulación de carga
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Noticias de ejemplo
        const mockNews = [
          {
            id: 1,
            title: "Nuevo chip cuántico promete revolucionar la computación",
            description: "Investigadores logran un avance significativo en la computación cuántica con un chip que opera a temperatura ambiente.",
            content: `
              <p>Un equipo de científicos de la Universidad de Tecnología Cuántica ha anunciado hoy un avance revolucionario en el campo de la computación cuántica. Han desarrollado un nuevo chip cuántico capaz de operar a temperatura ambiente, lo que podría allanar el camino para la adopción generalizada de computadoras cuánticas.</p>
              
              <p>El Dr. Akira Tanaka, líder del equipo de investigación, explicó: "Hasta ahora, los sistemas cuánticos requerían temperaturas cercanas al cero absoluto para funcionar correctamente. Nuestro nuevo chip utiliza una tecnología de confinamiento de electrones que mantiene la coherencia cuántica incluso a temperatura ambiente."</p>
              
              <p>Este avance podría tener implicaciones significativas en diversos campos, desde la criptografía hasta la simulación de moléculas para el descubrimiento de nuevos medicamentos. Las empresas tecnológicas ya están mostrando un gran interés en esta tecnología.</p>
            `,
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "Tecnología",
            author: "Elena Rodríguez",
            date: "2024-03-15"
          },
          {
            id: 2,
            title: "Descubren exoplaneta con condiciones similares a la Tierra",
            description: "Astrónomos identifican un planeta fuera de nuestro sistema solar que podría albergar vida.",
            content: `
              <p>Un equipo internacional de astrónomos ha anunciado el descubrimiento de un exoplaneta que podría ser el candidato más prometedor hasta la fecha para albergar vida fuera de nuestro sistema solar. El planeta, denominado Kepler-452b, se encuentra en la "zona habitable" de su estrella, a una distancia que permitiría la existencia de agua líquida en su superficie.</p>
  
              <p>El Dr. Michael Thompson, líder del equipo de investigación, declaró: "Este es un hallazgo emocionante. Kepler-452b no solo está en la zona habitable, sino que también tiene un tamaño y una composición similares a los de la Tierra. Es el primo más cercano de nuestro planeta que hemos encontrado hasta ahora."</p>
  
              <p>El planeta, que se encuentra a unos 1.400 años luz de la Tierra, orbita una estrella similar al Sol cada 385 días. Los científicos estiman que tiene aproximadamente 1,6 veces el tamaño de la Tierra y una gravedad superficial aproximadamente el doble de la terrestre.</p>
            `,
            image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            category: "Ciencia",
            author: "Carlos Mendoza",
            date: "2024-03-14"
          },
          {
            id: 3,
            title: "Equipo local gana campeonato nacional en un emocionante final",
            description: "Los Leones se coronan campeones tras una victoria ajustada en el último minuto del partido.",
            content: `
              <p>En un final de infarto, los Leones se coronaron campeones del torneo nacional de fútbol al vencer a los Tigres con un marcador de 2-1. El gol de la victoria llegó en el último minuto del tiempo añadido, desatando la euforia entre los aficionados locales que abarrotaban el estadio.</p>
  
              <p>El capitán del equipo, Juan Martínez, anotó el gol decisivo con un espectacular tiro libre desde fuera del área. "Es un sueño hecho realidad", declaró Martínez entre lágrimas de alegría. "Hemos trabajado tan duro para llegar aquí, y ganar de esta manera es simplemente increíble."</p>
  
              <p>El entrenador de los Leones, Pedro Sánchez, elogió la determinación de su equipo: "Estos chicos nunca se rindieron. Incluso cuando estábamos abajo en el marcador, siguieron luchando hasta el final. Es un testimonio de su carácter y su espíritu de equipo."</p>
            `,
            image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
            category: "Deportes",
            author: "Ana Torres",
            date: "2024-03-13"
          },
          {
            id: 4,
            title: "Película independiente triunfa en festival de cine internacional",
            description: "'El Silencio del Amanecer' se lleva la Palma de Oro en Cannes, sorprendiendo a críticos y audiencia.",
            content: `
              <p>La película independiente "El Silencio del Amanecer", dirigida por la novel cineasta española Laura Gómez, ha causado sensación en el Festival de Cine de Cannes al llevarse la codiciada Palma de Oro. Esta victoria sorprendente marca la primera vez en una década que una ópera prima gana el premio principal del festival.</p>
  
              <p>La película, un drama intimista que explora los temas del duelo y la reconciliación en un pequeño pueblo costero, fue aclamada por su cinematografía impresionante y sus actuaciones conmovedoras. El jurado, presidido por el renombrado director Martin Scorsese, elogió la "visión única y la profunda humanidad" de la obra de Gómez.</p>
  
              <p>En su discurso de aceptación, una emocionada Laura Gómez declaró: "Este premio es un testimonio del poder de las historias pequeñas para resonar de manera universal. Dedico este honor a todos los cineastas independientes que luchan por hacer oír sus voces."</p>
            `,
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80",
            category: "Entretenimiento",
            author: "Javier López",
            date: "2024-03-12"
          },
          {
            id: 5,
            title: "Inteligencia Artificial logra avance en la predicción de terremotos",
            description: "Un nuevo sistema de IA muestra resultados prometedores en la detección temprana de actividad sísmica.",
            content: `
              <p>Un equipo de sismólogos e ingenieros de software ha desarrollado un sistema de Inteligencia Artificial (IA) que muestra un potencial sin precedentes para predecir terremotos con mayor precisión y antelación. El sistema, denominado "TerraAlert", ha sido probado en zonas sísmicamente activas durante los últimos 18 meses, ofreciendo resultados que han sorprendido incluso a los expertos más escépticos.</p>
  
              <p>La Dra. Samantha Chen, líder del proyecto, explicó: "TerraAlert utiliza una combinación de aprendizaje profundo y análisis de big data para detectar patrones sutiles en la actividad sísmica que los métodos tradicionales podrían pasar por alto. Hemos logrado predecir varios terremotos de magnitud 5.0 o superior con una antelación de hasta 72 horas."</p>
  
              <p>El sistema analiza una amplia gama de datos, incluyendo micro-temblores, cambios en la presión del suelo, variaciones en los campos electromagnéticos terrestres y hasta fluctuaciones en los niveles de gas radón. Esta aproximación multifacética permite a TerraAlert construir un modelo más completo de la actividad sísmica.</p>
            `,
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "Tecnología",
            author: "Miguel Ángel Sánchez",
            date: "2024-03-11"
          },
          {
            id: 6,
            title: "Nuevo estudio revela beneficios inesperados del café",
            description: "Investigadores descubren que el consumo moderado de café puede mejorar la longevidad.",
            content: `
              <p>Un nuevo estudio publicado en el Journal of Nutrition ha revelado que el consumo moderado de café puede tener beneficios inesperados para la salud, incluyendo una mayor longevidad.</p>
              <p>Los investigadores encontraron que las personas que beben de 3 a 5 tazas de café al día tienen un 15% menos de riesgo de muerte prematura por todas las causas, en comparación con los no bebedores de café.</p>
            `,
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "Ciencia",
            author: "Dr. María Gómez",
            date: "2024-03-10"
          },
          {
            id: 7,
            title: "Nueva tecnología de baterías promete revolucionar los vehículos eléctricos",
            description: "Startup desarrolla baterías de estado sólido con el doble de capacidad y tiempo de carga reducido.",
            content: `
              <p>Una startup de tecnología ha anunciado el desarrollo de una nueva batería de estado sólido que promete duplicar la capacidad de las baterías actuales de iones de litio y reducir el tiempo de carga a solo 15 minutos.</p>
              <p>Esta innovación podría resolver dos de los mayores obstáculos para la adopción generalizada de vehículos eléctricos: la autonomía limitada y los largos tiempos de carga.</p>
            `,
            image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            category: "Tecnología",
            author: "Ing. Carlos Ruiz",
            date: "2024-03-09"
          },
          {
            id: 8,
            title: "Descubren nueva especie de primate en la Amazonía",
            description: "Biólogos identifican un mono tití previamente desconocido en las profundidades de la selva amazónica.",
            content: `
              <p>Un equipo de biólogos ha anunciado el descubrimiento de una nueva especie de mono tití en una región remota de la Amazonía. El primate, que ha sido nombrado 'Callicebus amazonicus', se distingue por su pelaje rojizo y sus vocalizaciones únicas.</p>
              <p>Este hallazgo subraya la importancia de la conservación de los bosques tropicales, que siguen albergando especies desconocidas para la ciencia.</p>
            `,
            image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
            category: "Ciencia",
            author: "Dra. Ana Silva",
            date: "2024-03-08"
          }
        ];

        setFeaturedNews(mockNews);
        setLatestNews(mockNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Cargando noticias...</div>;
  }

  return (
    <div className="space-y-12">
      {featuredNews.length > 0 && <HeroSection featuredArticle={featuredNews[0]} />}

      {/* Noticias destacadas */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-highlight flex items-center space-x-2 font-headline">
          <FiTrendingUp />
          <span>Noticias Destacadas</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNews.slice(1, 4).map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <NewsletterSubscribe />

      {/* Últimas noticias */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-highlight font-headline">
          Últimas Noticias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestNews.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
