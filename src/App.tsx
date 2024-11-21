
import { CartProvider } from "./components/Contexts/CartContext.tsx";
import { Router } from "./Router.tsx";

function App() {
  return (
    <>
     <CartProvider>
       <Router />
     </CartProvider>
    </>
  );
}

export default App;
