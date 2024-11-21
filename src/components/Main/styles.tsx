import styled from "styled-components";
import { FaShoppingCart, FaBox, FaClock } from "react-icons/fa";
import { BsFillCupHotFill } from "react-icons/bs";
import { BaseIconProps } from "../Finished/styles";

export const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 5.75rem;

  @media (max-width: 480px) {
    width: 400px;
    margin: 0 auto;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;

    img {
      margin: 20px 100px 0 0;
    }

    p {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 300px;
      margin-left: 60px;
    }
  }
`;

export const Content = styled.div`
  width: 35rem;

  @media (max-width: 480px) {
    font-size: 19px;
    text-align: center;
    width: 400px;
  }

  h1 {
    color: #272221;
    font-size: 3rem;
    font-family: "Baloo 2", sans-serif;
    line-height: 3.1rem;

    @media (max-width: 480px) {
      font-size: 19px;
      line-height: 25px;
    }
  }
  > p {
    color: #403937;
    font-size: 1.3rem;
    font-family: "Roboto", serif;
    margin: 1rem 0 4.1rem 0;

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  > div {
    display: flex;
    gap: 1.25rem;

    @media (max-width: 480px) {
      font-size: 11px;
      margin-top: -30px;

      img {
        width: 200px;
      }
    }

    p {
      margin-bottom: 1.25rem;
    }
  }
`;

export const BaseIcon = styled.div<BaseIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
`;

export const ShoppingCartIcon = () => (
  <BaseIcon bgColor="#C47F17">
    <FaShoppingCart />
  </BaseIcon>
);

export const BoxIcon = () => (
  <BaseIcon bgColor="#403937">
    <FaBox />
  </BaseIcon>
);

export const ClockIcon = () => (
  <BaseIcon bgColor="#DBAC2C">
    <FaClock />
  </BaseIcon>
);

export const CoffeeIcon = () => (
  <BaseIcon bgColor="#8047F8">
    <BsFillCupHotFill />
  </BaseIcon>
);
