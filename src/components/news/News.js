import './News.css';


function News() {

  return (
    <div className="news-container">
      <div className="news-header">
        <h1>Últimas noticias</h1>
      </div>
      <div className="news-content">
        <div className="news-article">
          <div className="article-image">
            <img src={require("../../images/news1.jpg")} alt="Noticia 1" />
          </div>
          <div className="article-text">
            <h2>Nuevos platillos en el menú</h2>
            <p>¡Estamos emocionados de anunciar el lanzamiento de nuestro nuevo menú! Nuestros chefs han estado trabajando arduamente en la creación de nuevos platillos deliciosos que sabemos que te encantarán. Ven y pruébalos hoy mismo.</p>
            <p>Publicado el 1 de marzo de 2023</p>
          </div>
        </div>
        <div className="news-article">
          <div className="article-image">
            <img src={require("../../images/news2.jpg")} alt="Noticia 2" />
          </div>
          <div className="article-text">
            <h2>Cena en el patio durante el verano</h2>
            <p>¡El verano está casi aquí y estamos emocionados de anunciar la apertura de nuestro patio al aire libre! Disfruta de tu comida al aire libre con hermosas vistas de la ciudad. Se recomienda hacer reservaciones.</p>
            <p>Publicado el 15 de mayo de 2023</p>
          </div>
        </div>
        <div className="news-article">
          <div className="article-image">
            <img src={require("../../images/news3.jpg")} alt="Noticia 3" />
          </div>
          <div className="article-text">
            <h2>Celebra el Día del Padre con nosotros</h2>
            <p>¿Buscas la manera perfecta de celebrar el Día del Padre? Únete a nosotros para disfrutar de un menú especial fijo que seguramente impresionará. ¡Reserva tu mesa ahora!</p>
            <p>Publicado el 5 de junio de 2023</p>
          </div>
        </div>
      </div>
      <div class="rss-container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <a class="rss-link" href="https://restaurante-129fa.web.app/rss.xml"><i class="fas fa-rss"></i> No te olvides de nuestro RSS</a>
      </div>
    </div>
  );
}

export default News;