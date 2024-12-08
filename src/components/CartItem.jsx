import PropTypes from 'prop-types'; // Import PropTypes
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import { Trash2 } from 'lucide-react';

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    dispatch(updateQuantity({ id: item.id, quantity }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center border-b py-4">
      <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-green-600 text-sm">In Stock</p>
        <div className="flex items-center mt-2">
          <select
            value={item.quantity}
            onChange={handleQuantityChange}
            className="border rounded-md p-1 mr-4"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button
            onClick={handleRemove}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <Trash2 size={16} className="mr-1" /> Remove
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

// PropTypes validation for the `item` prop
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired, // Assuming id is a string
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
