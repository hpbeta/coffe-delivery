import { useContext } from "react";
import delivery from "../../assets/illustration.png";
import {
  ClockIcon,
  ContainerFinished,
  ContainerInfo,
  LocationIcon,
  Money,
  Paragraph,
  Title,
} from "./styles";
import { CartContext, CartContextType } from "../Contexts/CartContext";

export function Finished() {

  const { rua, numero, cidade, bairro, uf, selectedPayment   } = useContext(CartContext) as CartContextType
  return (
    <ContainerFinished>
      <ContainerInfo>
        <Title>Uhu! Pedido confirmado</Title>
        <Paragraph>
          Agora é só aguardar que logo o café chegará até você
        </Paragraph>

        <div>
          <LocationIcon />
          <div>
            <p>
              {" "}
              Entrega em <span>{rua}, {numero}</span>
            </p>
            <p>{bairro} - {cidade}, {uf}</p>
          </div>
        </div>

        <div>
          <ClockIcon />
          <div>
            <p> Previsão de entrega</p>
            <span>20 min - 30 min</span>
          </div>
        </div>

        <div>
          <Money />
          <div>
            <p>Pagamento na entrega</p>
            <span>{selectedPayment || 'Selecione uma forma de pagamento'}</span>
          </div>
        </div>
      </ContainerInfo>
      <img src={delivery} alt="" />
    </ContainerFinished>
  );
}
