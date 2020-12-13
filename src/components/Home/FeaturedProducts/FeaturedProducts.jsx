import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    return (
        <section className="featuredProducts">
            <div className="container">
                <h2>Productos</h2>

                <ul>
                    <li><ProductCard titulo="Giftbox" precio="2.500" /></li>
                    <li><ProductCard titulo="Flowerbox" precio="3.000" /></li>
                    <li><ProductCard titulo="Candles" precio="1.500" /></li>
                    <li><ProductCard titulo="Personalizadas" precio="3.500" /></li>
                </ul>
            </div>
        </section>
    )
}

export default FeaturedProducts;