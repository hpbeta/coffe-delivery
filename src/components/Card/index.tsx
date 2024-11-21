import { useContext } from "react";

import {
  CardInfo,
  ContainerBuy,
  ContainerCard,
  Description,
  IconShop,
  Main,
  Price,
  Title,
  Types,
} from "./styles.ts";
import { CartContext, CartContextType } from "../Contexts/CartContext.tsx";

export function Card() {
  const { coffeData, handleDecrement, handleIncrement, counts, addToCart } =
    useContext(CartContext) as CartContextType;

  return (
    <Main>
      <h1>Nossos cafés</h1>
      <ContainerCard>
        {coffeData.map((coffe, index) => (
          <CardInfo key={index}>
            <img src={coffe.image} alt={coffe.title} />
            <Types>{coffe.type}</Types>
            <Title>{coffe.title}</Title>
            <Description>{coffe.description}</Description>
            <ContainerBuy>
              <Price>R${coffe.price.toFixed(2)}</Price>
              <button onClick={() => handleDecrement(index)}>-</button>
              <p>{counts[index]}</p>
              <button onClick={() => handleIncrement(index)}>+</button>
              <IconShop
                onClick={() => {
                  if (counts[index] > 0) {
                    addToCart(index);
                  }
                }}
              />
            </ContainerBuy>
          </CardInfo>
        ))}
      </ContainerCard>
    </Main>
  );
}
