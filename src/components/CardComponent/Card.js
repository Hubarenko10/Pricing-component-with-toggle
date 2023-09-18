import { useState } from "react"
import { Button, ButtonProf, CardList, CardTitle, CardTitleProf, CheckboxInput, Down, Icon, IconProf, Price, PriceProf, Size, SizeProf, Storage, StorageProf, StyledLabel, SwitchBox, Text, Up, Users, UsersProf } from "./CardStyled"
import up from "../../images/up.svg"
import down from "../../images/down.svg"



export const Card = () => {
    const [basic, setBasic] = useState(199.99);
    const [professional, setProfessional] = useState(249.99);
    const [master, setMaster] = useState(399.99);
  
    const handlePriceChange = () => {
      setBasic(prevBasic => {
        if(prevBasic === 199.99){
            return 19.99
        }
        return 199.99
    });
      setProfessional(prevBasic => {
        if(prevBasic === 249.99){
            return 24.99
        }
        return 249.99
    });
      setMaster(prevBasic => {
        if(prevBasic === 399.99){
            return 39.99
        }
        return 399.99
    });
    };
    return(
        <>

       
        <SwitchBox>
        
          <Text>Annually</Text>
        <CheckboxInput onChange={handlePriceChange} type="checkbox" id="switch" />
        <StyledLabel htmlFor="switch">Toggle</StyledLabel>
          <Text>Monthly</Text>
          
      </SwitchBox>
      <CardList>
            <li>
                <CardTitle>Basic</CardTitle>
                <Price><Icon/>{basic}</Price>
                <Storage>500 GB Storage</Storage>
                <Users>2 Users Allowed</Users>
                <Size>Send up to 3 GB</Size>
                <Button>Learn More</Button>
            </li>
            <li>
                <CardTitleProf>Professional</CardTitleProf>
                <PriceProf><IconProf/>{professional}</PriceProf>
                <StorageProf>1 TB Storage</StorageProf>
                <UsersProf>5 Users Allowed</UsersProf>
                <SizeProf>Send up to 10 GB</SizeProf>
                <ButtonProf>Learn More</ButtonProf>
            </li>
            <li>
                <CardTitle>Master</CardTitle>
                <Price><Icon/>{master}</Price>
                <Storage>2 TB Storage</Storage>
                <Users>10 Users Allowed</Users>
                <Size>Send up to 20 GB</Size>
                <Button>Learn More</Button>
            </li>
       </CardList>
       <Up src={up} alt="back"/>
       <Down src={down} alt="back"/>
      </>

    )


}