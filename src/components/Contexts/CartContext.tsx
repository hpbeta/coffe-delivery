/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useEffect, useState } from "react";
import coffeData from "../Card/cardData";
import { useForm, UseFormRegister } from "react-hook-form";

interface FormData {
  rua: string
  cidade: string
  bairro: string
  uf: string
  numero: string
}

export interface CartContextType {
  handleSelectPayment: (payment: string) => void
  handleIncrement: (index: number) => void
  handleDecrement: (index: number) => void
  addToCart: (index: number) => void
  deleteProduts: (index: number) => void
  finishedRequested: () => void
  rua: string
  numero: string
  bairro: string
  cidade: string
  uf: string
  counts: number[]
  coffeData: typeof coffeData
  totalItems: number
  products: typeof coffeData
  register: UseFormRegister<FormData>
  selectedPayment: string
  isFormComplete: string
}

interface CartProviderProps {
  children: ReactNode
}

interface coffeItem {
  image: string;
  price: number
  description: string
  type: string[]
  title: string
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps)  {
  const [counts, setCounts] = useState(Array(coffeData.length).fill(0)); //Contador dos produtos
  const [totalItems, setTotalItems] = useState(0); // Contator dos produtos totais que é exibido no icon do header
  const [products, setProducts] = useState<coffeItem[]>([]); // array dos produtos
  const [selectedPayment, setSelectedPayment] = useState(""); //Estado para armazenar qual a forma de pagamento

  useEffect(() => {
    const storedProducts = localStorage.getItem("coffeDelivery");
    const storedCounts = localStorage.getItem("coffeDeliveryCounts");
    const storedTotalItems = localStorage.getItem("coffeDeliveryTotalItems");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
    if (storedCounts) {
      setCounts(JSON.parse(storedCounts));
    }
    if (storedTotalItems) {
      setTotalItems(JSON.parse(storedTotalItems));
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("coffeDelivery", JSON.stringify(products));
      localStorage.setItem("coffeDeliveryCounts", JSON.stringify(counts));
      localStorage.setItem(
        "coffeDeliveryTotalItems",
        JSON.stringify(totalItems)
      );
    }
  }, [products, counts, totalItems]);

  function handleSelectPayment(payment: string) {
    //funcao para pegar qual forma de pagamento vou usar
    setSelectedPayment(payment);
  }

  function handleIncrement(index: number) {
    //funcao para aumentar o número de produtos no contador
    const newList = [...counts];
    newList[index] += 1;
    setCounts(newList);
  }

  function handleDecrement(index: number) {
    //funcao para diminuir o número de produtos no contador
    const newList = [...counts];

    if (newList[index] > 0) newList[index] -= 1;

    setCounts(newList);
  }

  function addToCart(index: number) {
    //funcao para adicionar os produtos na página de checkout clicando no icone de carrinho
    const product = coffeData[index];
    setProducts((prevProducts) => [...prevProducts, product]);
    setTotalItems(totalItems + 1);
  }

  function deleteProduts(index: number) {
    //funcao para deletar produtos da página de checkout quando clico no 'REMOVE'
    const newArrProducts = products.filter((_, i) => i !== index);
    setProducts(newArrProducts);
    setTotalItems(products.length - 1);
  }

  function finishedRequested() {
    //funcao para resetar tanto o número total de itens no icon quanto os produtos exibidos no componente de checkout
    setTotalItems(0);
    setProducts([]);
    setCounts(Array(coffeData.length).fill(0));
    localStorage.clear()

    console.log('Cart has been reset');
    
  }

  const { register, watch } = useForm({
    defaultValues: {
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  const rua = watch("rua");
  const numero = watch("numero");
  const bairro = watch("bairro");
  const cidade = watch("cidade");
  const uf = watch("uf");

  const isFormComplete = rua && numero && bairro && cidade && uf;

  return (
    <CartContext.Provider
      value={{
        handleIncrement,
        handleDecrement,
        counts,
        coffeData,
        totalItems,
        addToCart,
        products,
        deleteProduts,
        register,
        rua,
        numero,
        bairro,
        cidade,
        uf,
        finishedRequested,
        handleSelectPayment,
        selectedPayment,
        isFormComplete,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
