import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './SecondNews.css';

const SecondNews = () => {
  return (
    <>
      <Header />
      <div className="news-item">
        <div className="news-item">
          <h1>Cena en el patio durante el verano</h1>
          <p>¡El verano está casi aquí y estamos emocionados de anunciar la apertura de nuestro patio al aire libre! Disfruta de tu comida al aire libre con hermosas vistas de la ciudad. Se recomienda hacer reservaciones.</p>
          <p>Publicado el: Sun, 15 May 2023 00:00:00 GMT</p>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default SecondNews;



