import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import './ThirdNews.css';

const ThirdNews = () => {
  return (
    <>
    <Header />
     <div className="news-item">
      <h1>Nuevos platillos en el menú</h1>
      <p>¡Estamos emocionados de anunciar el lanzamiento de nuestro nuevo menú! Nuestros chefs han estado trabajando arduamente en la creación de nuevos platillos deliciosos que sabemos que te encantarán. Ven y pruébalos hoy mismo.</p>
      <p>Publicado el: Wed, 01 Mar 2023 00:00:00 GMT</p>   
    </div>
    <Footer />
    </>
   
  );
};

export default ThirdNews;