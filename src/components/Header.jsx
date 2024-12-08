import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-[#131921] text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
            className="h-8 mr-2"
          />
        </Link>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-[#febd69] px-4 rounded-r-md hover:bg-[#f3a847]">
              <Search className="text-black" />
            </button>
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Link to="/account" className="hover:text-gray-300">
            <div className="text-sm">
              <p className="text-xs">Hello, Sign in</p>
              <p className="font-bold">Account & Lists</p>
            </div>
          </Link>

          <Link to="/orders" className="hover:text-gray-300">
            <div className="text-sm">
              <p className="text-xs">Returns</p>
              <p className="font-bold">& Orders</p>
            </div>
          </Link>

          <Link to="/cart" className="flex items-center hover:text-gray-300">
            <div className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-[#febd69] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            </div>
            <span className="ml-2 font-bold">Cart</span>
          </Link>
        </nav>
      </div>

      <div className="bg-[#232f3e] mt-2 -mx-4 px-4 py-2">
        <div className="container mx-auto flex items-center space-x-4">
          <button className="flex items-center text-white hover:text-gray-300">
            <Menu className="mr-1" size={20} />
            All
          </button>
          <Link to="/deals" className="text-white hover:text-gray-300">Today is Deals</Link>
          <Link to="/customer-service" className="text-white hover:text-gray-300">Customer Service</Link>
          <Link to="/registry" className="text-white hover:text-gray-300">Registry</Link>
          <Link to="/gift-cards" className="text-white hover:text-gray-300">Gift Cards</Link>
          <Link to="/sell" className="text-white hover:text-gray-300">Sell</Link>
        </div>
      </div>
    </header>
  );
};
