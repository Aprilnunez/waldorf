import './reset.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';
import Nav from './components/general/Nav/Nav';


function App() {

  const cartelSaludo = () => {
    alert("Hola");

  }

  return (
    <>
      <Nav titulo="Waldorf" action={cartelSaludo} />

      <FeaturedProducts />

    </>
  );
}

export default App;
