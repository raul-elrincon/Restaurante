import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MenuItem from "../components/menuItem/MenuItem";
import OrderForm from "../components/orderForm/OrderForm";

const menuData = [
  {
    title: 'Spaghetti',
    description: 'Deliciosos espaguetis con salsa de tomate y queso rallado.',
    price: 10,
    image: require('../images/spaghetti-12jpg.jpg') 
  },
  {
    title: 'Bistec',
    description: 'Jugoso bistec a la parrilla acompañado de papas fritas y ensalada.',
    price: 12,
    image: require('../images/istockphoto-1371751060-612x612.jpg') 
  },
  {
    title: 'Canapes de Salmon',
    description: 'Canapes de salmón a la plancha con una guarnición de vegetales frescos.',
    price: 15,
    image: require('../images/canape-2802_1280.jpg')
  },
  {
    title: 'Pizza',
    description: 'Pizza casera con una variedad de ingredientes frescos y sabrosos.',
    price: 7,
    image: require('../images/pizza-3007395_1280.jpg')
  },
  {
    title: 'Lasaña',
    description: 'Deliciosa lasaña de carne con capas de pasta, salsa de tomate y queso derretido.',
    price: 7,
    image: require('../images/lasagna-7577748_960_720.jpg')
  },
  {
    title: 'Napolitana',
    description: 'Pizza estilo napolitano con tomate, mozzarella, albahaca y aceite de oliva.',
    price: 7,
    image: require('../images/pizza-2380025_1280.jpg')
  }, {
    title: 'Spaghetti Pesto',
    description: 'Deliciosos espaguetis con salsa de tomate y queso rallado.',
    price: 10,
    image: require('../images/spaghetti-5329689_1280.jpg') 
  },
  {
    title: 'Macarrones al pesto',
    description: 'Sabrosos macarrones con salsa pesto, piñones y queso parmesano.',
    price: 7,
    image: require('../images/pasta-6015771_1280.jpg') 
  },
  {
    title: 'Pizza Margarita',
    description: 'Clásica pizza margarita con salsa de tomate, mozzarella y albahaca fresca.',
    price: 7,
    image: require('../images/pizza-2530169_1280.jpg')  
  },
  {
    title: 'Burrito',
    description: 'Delicioso burrito mexicano relleno de carne, frijoles, arroz y queso.',
    price: 7,
    image: require('../images/grilled-pineapple-pork-burrito-2944562_1280.jpg') 
  },
  {
    title: 'Quesadilla',
    description: 'Quesadilla de queso fundido con tortilla de maíz y guarniciones.',
    price: 7,
    image: require('../images/food-1284268_1280.jpg') 
  },
  {
    title: 'Arroz negro',
    description: 'Arroz negro con mariscos y alioli, una delicia de la cocina mediterránea.',
    price: 7,
    image: require('../images/food-3311164_1280.jpg') 
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
      <OrderForm />
      <Footer />
    </div>
  );
}

export default MenuPage;