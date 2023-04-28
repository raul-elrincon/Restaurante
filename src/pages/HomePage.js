import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import './HomePage.css';
import Reserve from "../components/reserve/Reserve";
import FeaturedItems from "../components/featuredItems/FeaturedItems";
import Reviews from "../components/reviews/Reviews";
import CarouselComponent from "../components/carouselComponent/CarouselComponent";

const reviewsData = [
  {
    author: "Juan Pérez",
    comment: "Excelente comida y servicio",
    rating: 5
  },
  {
    author: "María Rodríguez",
    comment: "El ambiente es encantador", rating: 4
  },
  {
    author: "Carlos Gómez",
    comment: "Los precios son un poco altos",
    rating: 3
  },
];

function HomePage() {

  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="home-hero">
          <h1>Bienvenidos a RauL´S</h1>
          <p>Ofrecemos la mejor comida de la ciudad</p>
          <a href="/menu">Ver nuestro menú</a>
        </div>
        <div className="home-promotions">
          <h2>Ofertas especiales</h2>
          <ul>
            <li>50% de descuento en bebidas durante todo el día</li>
            <li>Plato del día por solo $10.99</li>
            <li>Menú infantil gratis los miércoles</li>
          </ul>
        </div>
        <FeaturedItems />
        <div className="home-about">
          <h2>Sobre nosotros</h2>
          <p>
            RauL´S Restaurant es el lugar perfecto para disfrutar de una
            deliciosa comida en un ambiente relajado. Nuestro equipo de chefs
            altamente calificados prepara cada plato con los ingredientes más
            frescos y de la mejor calidad. Ya sea que esté buscando un lugar
            para una cena íntima o para celebrar una ocasión especial, el
            Restaurante RauL´S es la elección perfecta.
          </p>
        </div>
      </div>

      <Reserve />

      <Reviews reviews={reviewsData} />

      <CarouselComponent />

      <Footer />
    </div>
  );
}
export default HomePage;
