import React from 'react';
import './TermsOfSalesPage.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function TermsOfSalePage() {
  return (
    <>
      <Header />
      <div className="terms-of-sale-page">
        <h1>Condiciones de Venta</h1>
        <h2>Precios y Pagos</h2>
        <p>Los precios de nuestros productos incluyen el IVA. Se aceptan pagos con tarjeta de crédito y efectivo. No se aceptan cheques personales.</p>
        <h2>Devoluciones y Reembolsos</h2>
        <p>Si no estás satisfecho con tu compra, puedes devolverla dentro de las 24 horas posteriores a la recepción para obtener un reembolso completo. Los productos deben estar en su estado original y no deben haber sido consumidos. No se aceptan devoluciones después de 24 horas.</p>
        <h2>Cancelaciones</h2>
        <p>Puedes cancelar tu pedido en cualquier momento antes de que sea preparado para su envío. Si tu pedido ya ha sido preparado para su envío, no podrás cancelarlo.</p>
        <h2>Problemas con tu Pedido</h2>
        <p>Si tienes algún problema con tu pedido, por favor contáctanos lo antes posible para solucionarlo. Haremos todo lo posible para asegurarnos de que estés satisfecho con tu compra.</p>
      </div>
      <Footer />
    </>
  );
}

export default TermsOfSalePage;
