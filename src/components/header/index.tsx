import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors"
        >
          Shopping Dev
        </Link>

        <div className="flex items-center space-x-2">
          <Link 
            to="cart" 
            className="relative p-2 rounded-full text-black hover:bg-gray-100 transition-colors"
          >
            <FiShoppingCart size={24} />
            <span className="absolute right-0 -top-2 px-2 bg-green-600 rounded-full w-6 h-6 flex items-center justify center text-white text-xs">
               4
            </span>
          </Link>
          
          <button 
            type="button" 
            className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200"
            aria-label="Perfil"
          >
            <FiUser size={24} color="brown"/>
          </button>
        </div>
      </nav>
    </header>
  );
}