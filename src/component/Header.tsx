import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart, total } = useCart();
  return (
    <div className="homeContainer footerInfo">
      <div className="footItem">
        Items: <span>{cart.length}</span>
      </div>
      <div className="footTotal">
        Total: <span>${total}</span>
      </div>
    </div>
  );
};

export default Header;
