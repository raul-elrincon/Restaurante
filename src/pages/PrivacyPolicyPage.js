import React from 'react';
import './PrivacyPolicyPage.css';
import Footer from "../components/footer/Footer";
import Header from '../components/header/Header';
function PrivacyPolicyPage() {
  return (

    <>
      <Header />
      <div className="privacy-policy-page">
        <h1>Política de Privacidad</h1>
        <p>
          Esta política de privacidad establece cómo Raul´S utiliza y protege cualquier información que proporciones cuando utilizas este sitio web.
        </p>
        <p>
          Raul´S se compromete a garantizar que tu privacidad esté protegida. Si te pedimos que proporciones cierta información mediante la cual puedas ser identificado al utilizar este sitio web, puedes estar seguro de que solo se utilizará de acuerdo con esta declaración de privacidad.
        </p>
        <p>
          Raul´S puede cambiar esta política de vez en cuando al actualizar esta página. Debes revisar esta página de vez en cuando para asegurarte de que estás satisfecho con los cambios.
        </p>
        <h2>Qué recopilamos</h2>
        <p>Podemos recopilar la siguiente información:</p>
        <ul>
          <li>nombre y cargo</li>
          <li>información de contacto, incluida la dirección de correo electrónico</li>
          <li>información demográfica como código postal, preferencias e intereses</li>
          <li>otra información relevante para encuestas y/o ofertas para clientes</li>
        </ul>
        <h2>Qué hacemos con la información que recopilamos</h2>
        <p>Requerimos esta información para comprender tus necesidades y brindarte un mejor servicio, y en particular por las siguientes razones:</p>
        <ul>
          <li>Mantenimiento de registros internos.</li>
          <li>Podemos utilizar la información para mejorar nuestros productos y servicios.</li>
          <li>Podemos enviar periódicamente correos electrónicos promocionales sobre nuevos productos, ofertas especiales u otra información que creemos que puede resultarte interesante utilizando la dirección de correo electrónico que nos has proporcionado.</li>
          <li>De vez en cuando, también podemos utilizar tu información para contactarte con fines de investigación de mercado. Podemos contactarte por correo electrónico, teléfono, fax o correo. Podemos utilizar la información para personalizar el sitio web según tus intereses.</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
