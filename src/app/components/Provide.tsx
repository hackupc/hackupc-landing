import styled from "styled-components";
import Image from "next/image";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import {
  BlockTitle,
  Body,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
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
    background-size: contain; 
    background-position: center top; 
  
  @media (min-width: ${MobileBreakpoint}) {
    background-image: url("/provide desktop background.png");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    text-align: center;
    color: white;
  }
`;

const ProvideHeader = styled(SectionTitle)`
  font-family: 'Silkscreen', sans-serif; 
  src: url('https://fonts.gstatic.com/s/silkscreen/v2/m8JcjfpeG5hcULX7lIph9HFwB-M.woff2') format('woff2'); 
  color: ${Colors.white};  /* title color */
  font-size: 24px;
  margin-bottom: 30px;
  text-transform: uppercase;
  white-space: pre-line; /* Enable line breaks */
`;

const ProvideBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const ProvideBlock = styled.div`
  background-color:${Colors.pink}; /* Pink background */
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  min-width: 80%;
  border: 6px solid ${Colors.white};
`;

const ProvideSubTitle = styled.div`
  background-color:${Colors.blue}; /* Blue background */
  border-radius: 10px;
  padding: 0px;
  z-index: 1;
  margin: -23px;
  text-align: center;
  min-width: 45%;
  border: 6px solid ${Colors.pink};
`;

const ProvideBody = styled(Body)`
  font-size: 16px;
  line-height: 1.1;
  color: ${Colors.blue};
  white-space: pre-line; /* Enable line breaks */
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
  height: 40px;
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
      <ProvideBlockWrapper>
        <DividerIcon2 />
        <ProvideHeader>We Also {"\n"} Provide...</ProvideHeader>

        <ProvideSubTitle>
          <ProvideSubTitleText>FOOD</ProvideSubTitleText>
        </ProvideSubTitle>
      </ProvideBlockWrapper>
      <ProvideBlockWrapper>
        <ProvideBlock>
          <ProvideBody>
            We’ve got you completely {"\n"} covered, we even have {"\n"} midnight snacks.
            Besides, you {"\n"} can serve yourself with {"\n"} cafeteria snacks.
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
            We will provide air mattresses both {"\n"} nights so you can boost your
            energy {"\n"} levels. Check out the FAQs for more info.
          </ProvideBody>
        </ProvideBlock>
        <ProvideSubTitle>
          <ProvideSubTitleText>SPONSORS</ProvideSubTitleText>
        </ProvideSubTitle>
      </ProvideBlockWrapper>
      <ProvideBlockWrapper>
        <ProvideBlock>
          <ProvideBody>
            You can also visit our sponsors' stands or {"\n"} meet them remotely!
            They'll be available {"\n"} during the day and would love to talk to {"\n"} you!
            (you may even get some swag as well).
          </ProvideBody>
        </ProvideBlock>
        <div>
        <Image
          src="/pinball flipper1.png"
          alt="flipper 1"
          width={155}
          height={85}
          style={{position: "relative", top: "-100px", left: "-200px"}}
        />
        <Image
          src="/pinball flipper2.png"
          alt="flipper 2"
          width={155}
          height={85}
          style={{position: "relative", top: "-100px", left: "200px"}}
        />
        </div>
      </ProvideBlockWrapper>
    </ProvideSectionWrapper>
  );
}
