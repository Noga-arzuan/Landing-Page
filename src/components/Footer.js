import SocialIcons from "./SocialIcons";
import {Container}from "./styles/Container.styled";
import{Flex} from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <StyledFooter>
         <Container>
             <img src="./images/logo_white.svg" alt=""/>
           <Flex>
               <ul>
                   <li>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                   industry's standard dummy text ever sinc
                   </li>
                   <li>
                       +972-555-555555
                   </li>
                   <li>
                       example@huddle.com
                   </li>
               </ul>
               <ul>
                   <li> About Us </li>
                   <li> What We Do </li>
                   <li> FAQ </li>
               </ul>
               <ul>
               <li>Career</li>
               <li>Blog</li>
               <li>Contact</li>
                  </ul>
               
           </Flex>
           
          <SocialIcons/>
           <p>&copy; 2021 Huddle. All rights reserved</p>
             </Container>   
             </StyledFooter>    )
}
