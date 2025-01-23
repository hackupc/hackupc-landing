import styled from "styled-components";
import Image from "next/image";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import {
  BlockTitle,
  Body,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import {
  Secondary500,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";


const Colors = {
  pink: "#FF6798",
  blue: "#0F0030", 
  white: "#FFFFFF", 
  black: "#000000", 
  lightPink: "#FFB6C1", 
  lightBlue: "#F5F5F5", 
};

const ProvideSectionWrapper = styled.div`
  background-image: url("/paintball background mobile.png"); 
  background-size: 390px 1100px; 
  background-position: center; 
  background-repeat: no-repeat;
  text-align: center;
  color: white;
`;

const ProvideHeader = styled(SectionTitle)`
  font-family: 'Silkscreen', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${Colors.white};  /* title color */
  font-size: 24px;
  margin-bottom: 30px;
  text-transform: uppercase;
  white-space: pre-line; /* Enable line breaks */

  &.silkscreen-regular {
    font-family: 'Silkscreen', serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const ProvideBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

const ProvideBlock = styled.div`
  background-color:${Colors.pink}; /* Pink background */
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  min-width: 250px;
  max-width: 300px;
  border: 6px solid ${Colors.white};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProvideSubTitle = styled.div`
  background-color:${Colors.blue}; /* Blue background */
  border-radius: 10px;
  padding: 0px;
  text-align: center;
  min-width: 160px;
  max-width: 300px;
  border: 6px solid ${Colors.pink};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProvideBody = styled(Body)`
  font-size: 16px;
  line-height: 1.1;
  color: ${Colors.blue};
`;

const ProvideSubTitleText = styled(Body)`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: ${Colors.white};
`;

const DividerIcon = styled.div`
  width: 174px;
  height: 64px;
  background-image: url("/spacer div.png"); 
  background-size: 228px 132px;
  background-position: center;
  background-repeat: no-repeat;
`;

const DividerIcon2 = styled.div`
  width: 40px;
  height: 80px;
  background-image: url("/path-to-divider-icon.svg"); 
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const DividerIcon3 = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px auto;
  background-image: url("/path-to-divider-icon.svg"); 
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function Provide() {
  return (
    <ProvideSectionWrapper id="provide">
      <DividerIcon2 />
      <ProvideHeader className="silkscreen-regular">We Also {"\n"} Provide...</ProvideHeader>
      <ProvideBlockWrapper>
        <ProvideSubTitle>
         
            <ProvideSubTitleText>FOOD</ProvideSubTitleText>
         
        </ProvideSubTitle>
        </ProvideBlockWrapper>
        <ProvideBlockWrapper>
        <ProvideBlock>
          <ProvideBody>
            We’ve got you completely covered, we even have midnight snacks.
            Besides, you can serve yourself with cafeteria snacks.
          </ProvideBody>
        </ProvideBlock>
        <DividerIcon />
        <ProvideSubTitle>
         
         <ProvideSubTitleText>SLEEPING</ProvideSubTitleText>
      
        </ProvideSubTitle>
        </ProvideBlockWrapper>
        <ProvideBlockWrapper>
        <ProvideBlock>
          <ProvideBody>
            We will provide air mattresses both nights so you can boost your
            energy levels. Check out the FAQs for more info.
          </ProvideBody>
        </ProvideBlock>
    
        <ProvideSubTitle>
         
         <ProvideSubTitleText>SPONSORS</ProvideSubTitleText>
      
        </ProvideSubTitle>
        </ProvideBlockWrapper>
        <ProvideBlockWrapper>
        <ProvideBlock>
          <ProvideBody>
            You can also visit our sponsors' stands or meet them remotely!
            They'll be available during the day and would love to talk to you!
            (you may even get some swag as well).
          </ProvideBody>
        </ProvideBlock>
        <DividerIcon3 />
      </ProvideBlockWrapper>
    </ProvideSectionWrapper>
  );
}