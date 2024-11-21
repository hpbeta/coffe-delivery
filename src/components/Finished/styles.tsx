import styled from "styled-components";
import { FaClock } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

export interface BaseIconProps {
  bgColor: string
}

export const ContainerFinished = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding-left: 160px;
  gap: 102px;

  @media(max-width: 820px) {

    margin-top: 50px;
    padding-left: 0;
    gap: 0;
      
      img {
        display: none;
      }
       
     }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  color: #c47f17;
  font-family: "Baloo 2", sans-serif;

  @media(max-width: 480px) {
    margin-left: 12px;
    
  }
`;

export const Paragraph = styled.p`
  color: #403937;
  font-family: "Roboto", serif;
  margin-bottom: 40px;

  @media(max-width: 480px) {
    text-align: center;
    
  }
`;

export const ContainerInfo = styled.div`
  > div {
    display: flex;
    gap: 12px;
    margin-bottom: 2rem;

    span,
    p {
      font-size: 15px;
    }

    span {
      font-weight: bold;
      color: #403937;
    }

    @media(max-width: 480px) {
      
      align-items: center;
       justify-content: center;
      
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

export const Money = () => (
  <BaseIcon bgColor="#C47F17">
    <FiDollarSign />
  </BaseIcon>
);

export const ClockIcon = () => (
  <BaseIcon bgColor="#DBAC2C">
    <FaClock />
  </BaseIcon>
);

export const LocationIcon = () => (
  <BaseIcon bgColor="#8047F8">
    <IoLocationSharp />
  </BaseIcon>
);
