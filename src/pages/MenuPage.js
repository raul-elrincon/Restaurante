import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MenuItem from "../components/menuItem/MenuItem";

const menuData = [
  {
    title: 'Spaghetti',
    description: 'Deliciosos espaguetis con salsa de tomate y queso rallado.',
    price: 10,
    image: require('../images/Spaghetti.jpg') // Ruta de la imagen del plato 1
  },
  {
    title: 'Bistec',
    description: 'Jugoso bistec a la parrilla acompañado de papas fritas y ensalada.',
    price: 12,
    image: require('../images/Carne.jpg') // Ruta de la imagen del plato 2
  },
  {
    title: 'Salmon',
    description: 'Filete de salmón a la plancha con una guarnición de vegetales frescos.',
    price: 15,
    image: require('../images/salmon-1238248_640.png')// Ruta de la imagen de la bebida 1
  },
  {
    title: 'Pizza',
    description: 'Pizza casera con una variedad de ingredientes frescos y sabrosos.',
    price: 7,
    image: require('../images/pizza-3007395_1280.jpg')// Ruta de la imagen de la bebida 2
  },
  {
    title: 'Lasaña',
    description: 'Deliciosa lasaña de carne con capas de pasta, salsa de tomate y queso derretido.',
    price: 7,
    image: require('../images/images (1).jpg')// Ruta de la imagen de la bebida 2
  },
  {
    title: 'Napolitana',
    description: 'Pizza estilo napolitano con tomate, mozzarella, albahaca y aceite de oliva.',
    price: 7,
    image: require('../images/images (2).jpg')// Ruta de la imagen de la bebida 2
  }, {
    title: 'Spaghetti',
    description: 'Deliciosos espaguetis con salsa de tomate y queso rallado.',
    price: 10,
    image: require('../images/Spaghetti.jpg') // Ruta de la imagen del plato 1
  },
  {
    title: 'Macarrones al pesto',
    description: 'Sabrosos macarrones con salsa pesto, piñones y queso parmesano.',
    price: 7,
    image: require('../images/images (4).jpg') // Ruta de la imagen del plato 2
  },
  {
    title: 'Pizza Margarita',
    description: 'Clásica pizza margarita con salsa de tomate, mozzarella y albahaca fresca.',
    price: 7,
    image: require('../images/images.jpg') // Ruta de la imagen de la bebida 1
  },
  {
    title: 'Burrito',
    description: 'Delicioso burrito mexicano relleno de carne, frijoles, arroz y queso.',
    price: 7,
    image: require('../images/recetas-burritos-huevo.jpg_2.jpg') // Ruta de la imagen de la bebida 2
  },
  {
    title: 'Quesadilla',
    description: 'Quesadilla de queso fundido con tortilla de maíz y guarniciones.',
    price: 7,
    image: require('../images/csm_Easy_cheese_quesadillas7_57b906cf51.jpg') // Ruta de la imagen de la bebida 2
  },
  {
    title: 'Arroz negro',
    description: 'Arroz negro con mariscos y alioli, una delicia de la cocina mediterránea.',
    price: 7,
    image: require('../images/receta-arroz-negro-con-alioli-2.jpg') // Ruta de la imagen de la bebida 2
  }
];

function MenuPage() {
  return (
    <div>
      <Header />
      <ul>
        {menuData.map(item => (
          <MenuItem
            key={item.title}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default MenuPage;