import MenuPage from './pages/MenuPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfSalePage from './pages/TermsOfSalesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/condiciones-de-venta" element={<TermsOfSalePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/noticias" element={<NewsPage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
