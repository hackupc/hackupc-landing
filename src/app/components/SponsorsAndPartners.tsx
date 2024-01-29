import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-top: 20px;
`;

const ImageGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export default function MyWebpage() {
  return (
    <Container>
      <Title>Sponsors</Title>
      <ImageGrid>
        <Image src="" width={50} height={50} alt="" />
      </ImageGrid>

      <ImageGrid>
        <Image src="" width={50} height={50} alt="" />
        <Image src="" width={50} height={50} alt="" />
      </ImageGrid>

      <ImageGrid>
        <Image src="" width={50} height={50} alt="" />
        <Image src="" width={50} height={50} alt="" />
        <Image src="" width={50} height={50} alt="" />
        <Image src="" width={50} height={50} alt="" />
      </ImageGrid>

      <Title>Partners</Title>
      <ImageGrid>
        <Image src="" width={50} height={50} alt="" />
        <Image src="" width={50} height={50} alt="" />
        <Image src="" width={50} height={50} alt="" />
        <Image src="" width={50} height={50} alt="" />
      </ImageGrid>
    </Container>
  );
}
