import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;

  > div {
    margin-bottom: 20px;
  }

  @media (max-width: 820px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 20px;
  }

  @media(max-width: 480px) {
    margin-right: 55px;
    
  }
`;

export const Title = styled.h3`
  font-family: "Baloo 2", sans-serif;
  color: #272221;
  font-weight: bold;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    margin-left: 140px;
  }
`;

export const Container = styled.div`
  background-color: #f3f2f2;
  width: 640px;
  border-radius: 5px;
  padding: 40px;

  @media (max-width: 480px) {
    width: 380px;
    margin-left: 50px;
  }
`;

export const IconLocation = styled(IoLocationSharp)`
  color: #c47f17;
`;

export const Adress = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;

  p {
    color: #403937;
    margin-bottom: 2px;

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  input {
    background-color: #ededed;
    border: none;
    border-radius: 5px;
    padding: 12px;
    outline: none;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  div {
    display: flex;
    gap: 20px;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
`;

export const InputCep = styled.input`
  width: 200px;
`;
export const InputNumber = styled.input`
  width: 200px;
`;
export const InputDistrict = styled.input`
  width: 200px;
`;
export const InputComplemento = styled.input`
  width: 348px;
`;
export const InputUf = styled.input`
  width: 60px;
`;

export const ContainerPayInfo = styled.div`
  background-color: #f3f2f2;
  max-width: 640px;
  border-radius: 5px;
  padding: 40px;
  margin-top: 12px;
  @media (max-width: 480px) {
    width: 390px;
    margin-left: 50px;
  }
`;

export const ContainerPay = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 480px) {
    p {
      font-size: 11px;
      margin-bottom: 8px;
    }
  }
`;

export const IconPay = styled(FiDollarSign)`
  color: #8047f8;
`;

export const Pay = styled.div`
  display: flex;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 32px;
    background-color: #e6e5e5;
    padding: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border: 1px solid #8047f8;
    }

    svg {
      color: #8047f8;
    }
  }

  p {
    font-size: 11px;

    @media (max-width: 480px) {
      font-size: 8px;
    }
  }
`;

export const ContainerCheckout = styled.div`
  width: 448px;
  border-top-right-radius: 38px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 38px;
  border-bottom-right-radius: 5px;
  background-color: #f3f2f2;
  padding: 40px;

  img {
    width: 64px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    width: 390px;
    margin-left: 50px;
  }
`;

export const ContainerCheckoutInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 50px;
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  button {
    border: none;
    color: #8047f8;
    font-size: 14px;
    background-color: #e6e5e5;
    cursor: pointer;
    padding: 5px;
  }
`;

export const Line = styled.hr`
  margin: 24px 0;
`;

export const IconTrash = styled(FaRegTrashAlt)`
  color: #8047f8;
  font-size: 10px;
`;

export const Remove = styled.p`
  font-size: 12px;
  background-color: #e6e5e5;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
 
`;

export const ContainerTotal = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    p {
      color: #574f4d;
      font-size: 14px;
    }

    h2 {
      color: #272221;
    }
  }
`;

export const ButtonFinish = styled.button`
  font-weight: bold;
  background-color: #dbac2c;
  color: #ffffff;
  margin-top: 24px;
  padding: 12px 100px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 25px;
`;
