import styled from "@emotion/styled";
import Header from "../components/Header";
import Typography from "@mui/material/Typography";
import Asset from "../assets/image/assets.svg";
import Lines from "../assets/image/lines.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <ImageWrapper>
          <Image
            src={Asset}
            width={200}
            style={{
              width: "200px",
              height: "auto",
              position: "absolute",
              top: "60%",
              left: "55%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Image
            src={Lines}
            width={500}
            style={{
              width: "500px",
              height: "auto",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </ImageWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: black;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
`;
