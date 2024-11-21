import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

export const Main = styled.main`
  margin: 100px 0 30px 0;
  padding-left: 160px;

  
  h1 {
    margin-bottom: 34px;
    font-family: "Baloo 2", sans-serif;
    color: #272221;
  }

  @media(max-width: 480px) {
    width: 100%;
    padding: 0 110px;
  }
  @media(max-width: 393px) {
    width: 100%;
    padding: 0 60px;
    background-color: red;
  }
  
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  background-color: red;
  border-top-right-radius: 33px;
  border-bottom-left-radius: 33px;
  background-color: #f3f2f2;
  padding: 0px 15px;

  img {
    margin-top: -24px;
  }

 
  
`;

export const Types = styled.p`
  margin: 12px 0 19px 0;
  padding: 8px;
  border-radius: 20px;
  color: #c47f17;
  background-color: #f1e9c9;
  font-size: 10px;
  font-family: "Roboto", serif;
  font-weight: bold;
`;

export const Title = styled.h3`
  font-family: "Baloo 2", sans-serif;
  color: #272221;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 33px;
  color: #8d8686;
  font-size: 14px;
`;

export const ContainerBuy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  button {
    border: none;
    color: #8047f8;
    font-weight: bold;
    cursor: pointer;
    font-size: 15px;
  }
`;
export const Price = styled.p`
  font-family: "Baloo 2", sans-serif;
  color: #272221;
  font-weight: bold;
`;

export const IconShop = styled(FaShoppingCart)`
  color: #ffffff;
  background-color: #8047f8;
  padding: 8px;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
`;
