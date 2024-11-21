import logoCoffe from "../../assets/logo.svg";
import { IoLocationSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { ContainerHeader } from "./styles.ts";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext, CartContextType } from "../Contexts/CartContext.tsx";


export function Header() {

  const { totalItems } = useContext(CartContext) as CartContextType
 
  return (
    <ContainerHeader>
      <a href="/">
        <img src={logoCoffe} alt="Logo tipo" />
      </a>
      <div>
        <p>
          <IoLocationSharp /> Belo Horizonte, MG
        </p>
        <Link to="/checkout">
          <button>
            <FaShoppingCart />
          </button>
        </Link>
       {
        totalItems > 0 &&  <span>{totalItems}</span>
       }
      </div>
    </ContainerHeader>
  );
}
