import { CiCreditCard1, CiBank, CiMoneyBill } from "react-icons/ci";
import {
  Adress,
  Container,
  Form,
  InputDistrict,
  InputCep,
  InputNumber,
  InputUf,
  InputComplemento,
  IconLocation,
  ContainerPayInfo,
  ContainerPay,
  IconPay,
  Pay,
  Title,
  ContainerCheckout,
  ContainerCheckoutInfo,
  ContainerProducts,
  Line,
  IconTrash,
  Remove,
  ContainerTotal,
  ButtonFinish,
  Main,
} from "./styles.ts";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext, CartContextType } from "../Contexts/CartContext.tsx";

export function Checkout() {
  const {
    products,
    deleteProduts,
    counts,
    handleDecrement,
    handleIncrement,
    register,
    finishedRequested,
    handleSelectPayment,
    isFormComplete,
  } = useContext(CartContext) as CartContextType;

  function calculateTotal() {
    return products.reduce((total, product, index) => {
      return total + product.price * counts[index];
    }, 0);
  }

  return (
    <Main>
      <div>
        <Title>Complete seu pedido</Title>

        <Container>
          <Adress>
            <IconLocation />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Adress>

          <Form>
            <InputCep type="text" placeholder="CEP" />

            <input
              required
              type="text"
              placeholder="Rua"
              {...register("rua")}
            />
            <div>
              <InputNumber
                required
                type="text"
                placeholder="Número"
                {...register("numero")}
              />
              <InputComplemento type="text" placeholder="Complemento" />
            </div>
            <div>
              <InputDistrict
                required
                type="text"
                placeholder="Bairro"
                {...register("bairro")}
              />
              <input
                required
                type="text"
                placeholder="Cidade"
                {...register("cidade")}
              />
              <InputUf
                required
                type="text"
                placeholder="UF"
                {...register("uf")}
              />
            </div>
          </Form>
        </Container>

        <ContainerPayInfo>
          <ContainerPay>
            <IconPay />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento pode ser feito na entrega. Escolha a forma que
                deseja pagar
              </p>
            </div>
          </ContainerPay>
          <Pay>
            <div onClick={() => handleSelectPayment("Cartão de crédito")}>
              <CiCreditCard1 />
              <p>CARTÃO DE CRÉDITO</p>
            </div>

            <div onClick={() => handleSelectPayment("Cartão de débito")}>
              <CiBank />
              <p>CARTÃO DE DÉBITO</p>
            </div>

            <div onClick={() => handleSelectPayment("Dinheiro")}>
              <CiMoneyBill />
              <p>DINHEIRO</p>
            </div>
          </Pay>
        </ContainerPayInfo>
      </div>

      <div>
        <Title>Cafés Selecionados</Title>
        <ContainerCheckout>
          {products.map((product,  index) => (
            <ContainerCheckoutInfo key={index}>
              <img src={product.image} alt="" />
              <ContainerProducts>
                <p>{product.title}</p>
                <div>
                  <button onClick={() => handleDecrement(index)}>-</button>
                  <p>{counts[index]}</p>
                  <button onClick={() => handleIncrement(index)}>+</button>
                  <Remove onClick={() => deleteProduts(index)}>
                    {" "}
                    <IconTrash /> REMOVER
                  </Remove>
                </div>
              </ContainerProducts>
              <div>R${(product.price * counts[index]).toFixed(2)}</div>
            </ContainerCheckoutInfo>
          ))}
          <Line />

          <ContainerTotal>
            <div>
              <p>Total de Itens</p>
              <p>R${calculateTotal().toFixed(2)}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3.50</p>
            </div>
            <div>
              <h2>Total </h2>
              <p>R${(calculateTotal() + 3.5).toFixed(2)}</p>
            </div>
          </ContainerTotal>
          <Link to="/finished">
            <ButtonFinish
             onClick={() => {
              if(isFormComplete) {
                finishedRequested()
              }
             }}
             disabled={!isFormComplete}
            >
              CONFIRMAR PEDIDO
            </ButtonFinish>
          </Link>
        </ContainerCheckout>
      </div>
    </Main>
  );
}
