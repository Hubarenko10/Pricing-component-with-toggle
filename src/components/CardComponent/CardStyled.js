import styled from 'styled-components';
import { BiDollar } from 'react-icons/bi';


export const Up = styled.img`
 position: absolute;
  top: 2%;
  left: 75%;
  transform: translateX(-50%);
  z-index: -1; 
`
export const Down = styled.img`
 position: absolute;
  bottom: 12%;
  right: 60%;
  transform: translateX(-50%);
  z-index: -1; 
`

export const CheckboxInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 56px;
  height: 32px;
  background: #a2a7f0;
  display: block;
  border-radius: 100px;
  position: relative;
  margin-right: 24px;
  margin-left: 20px;

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  ${CheckboxInput}:checked + & {
    background: rgba(162, 167, 240, 0.7);
  }

  ${CheckboxInput}:checked + &:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  &:active:after {
    width: 50px;
  }
`;

export const SwitchBox = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:10;
`;
export const Text = styled.p`
  font-size: 15px;
  color: #6e728e;
`;

export const CardList = styled.ul`
    z-index:10;
  display: flex;
  justify-content: center;
  margin-top: 64px;
  align-items: center;
  li:nth-child(1) {
    width: 350px;
    height: 450px;
    background-color: #fff;
    box-shadow: -1px -1px 10px rgb(119, 118, 118);
    border-radius: 2%;
  }
  li:nth-child(2) {
    width: 350px;
    height: 500px;
    background-color: #a2a7f0;
    box-shadow: -1px -1px 10px rgb(119, 118, 118);
    border-radius: 2%; /* Style for the first list item */
  }
  li:nth-child(3) {
    width: 350px;
    height: 450px;
    background-color: #fff;
    box-shadow: -1px -1px 10px rgb(119, 118, 118);
    border-radius: 2%; /* Style for the first list item */
  }
`;

export const CardTitle = styled.h2`
  padding-top: 31px;
  color: #6e728e;
  font-size: 18px;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;
export const CardTitleProf = styled.h2`
  color: #fff;
  padding-top: 55px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;
export const Price = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  line-height: 1;
  letter-spacing: -2.16px;
  font-weight: bold;
  color: #4a4d60;
  margin-bottom: 32px;
`;
export const PriceProf = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  line-height: 1;
  letter-spacing: -2.16px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 32px;
`;

export const Icon = styled(BiDollar)`
  font-size: 40px;
`;

export const IconProf = styled(BiDollar)`
  font-size: 40px;
`;

export const Storage = styled.p`
  border-top: 1px solid #979797;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  color: #6e728e;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 12px;
`;
export const StorageProf = styled.p`
  border-top: 1px solid #fff;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Users = styled.p`
  display: flex;
  border-top: 1px solid #979797;
  justify-content: center;
  padding-top: 12px;
  width: 70%;
  margin: 0 auto;
  font-size: 15px;
  font-weight: bold;
  color: #6e728e;
  margin-bottom: 12px;
`;
export const UsersProf = styled.p`
  display: flex;
  border-top: 1px solid #fff;
  justify-content: center;
  padding-top: 12px;
  width: 70%;
  margin: 0 auto;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 12px;
`;

export const Size = styled.p`
  display: flex;
  border-top: 1px solid #979797;
  border-bottom: 1px solid #979797;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 70%;
  margin: 0 auto;
  font-size: 15px;
  font-weight: bold;
  color: #6e728e;
  margin-bottom: 32px;
`;
export const SizeProf = styled.p`
  display: flex;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 70%;
  margin: 0 auto;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  width: 288px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #6e728e;
  color:#6D72DE;
  font-size:13px;
  letter-spacing:1.39px;
  text-transform:uppercase;
  font-weight:bold;
  cursor:pointer;
`;

export const ButtonProf = styled.button`
  width: 288px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
  font-size:13px;
  letter-spacing:1.39px;
  text-transform:uppercase;
  font-weight:bold;
  cursor:pointer;
`;
