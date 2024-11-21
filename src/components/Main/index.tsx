import ImageCoffe from "../../assets/imagem.png";
import { Card } from "../Card";
import {
  BoxIcon,
  ClockIcon,
  CoffeeIcon,
  ContainerInfo,
  ContainerMain,
  Content,
  ShoppingCartIcon,
} from "./styles.tsx";

export function Main() {
  return (
    <>
      <ContainerMain>
        <ContainerInfo>
          <Content>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <div>
              <div>
                <p>
                  <ShoppingCartIcon /> Compra simples e segura
                </p>
                <p>
                  <BoxIcon /> Embalagem mantém o café intacto
                </p>
              </div>

              <div>
                <p>
                  <ClockIcon /> Entrega rápida e rastreada
                </p>
                <p>
                  <CoffeeIcon /> O café chega fresquinho até você
                </p>
              </div>
            </div>
          </Content>

          <img src={ImageCoffe} alt="" />
        </ContainerInfo>
      </ContainerMain>

      <Card />
    </>
  );
}
