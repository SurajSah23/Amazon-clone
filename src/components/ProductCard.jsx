import PropTypes from 'prop-types'; // Import PropTypes
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { Star } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < Math.floor(product.rating.rate) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">({product.rating.count})</span>
      </div>
      <p className="text-xl font-bold mb-2">${product.price}</p>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-[#febd69] text-black py-2 rounded-md hover:bg-[#f3a847] transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

// PropTypes validation for `product` prop
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
