import styled from "@emotion/styled"
import Header from "../components/Header"
import Typography from "@mui/material/Typography"
import Asset from "../assets/image/assets.svg"
import Lines from "../assets/image/lines.svg"
import Image from "next/image"
import Discord from "../assets/image/discord.svg"
import Twitter from "../assets/image/twitter.svg"
import Telegram from "../assets/image/telegram.svg"
import { keyframes } from "@emotion/react"
import Objet from "../components/Objet"

export default function Home() {
  return (
    <>
      <Container>
        <Objet />
        <ImageWrapper>
          <Image
            src={Asset}
            width={200}
            alt="image"
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
            width={1000}
            alt="image"
            style={{
              width: "1200px",
              height: "auto",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </ImageWrapper>
        <TitleWrapper>
          <Title>Simple and Fast access to Data</Title>
          <Subtitle>of BNB’s new layer</Subtitle>
          <Caption>
            {
              "zkBNB Analytics is a data analytics tool and data services for zkBNB, a trustless and\nscaling L2 solution for BNB Smart Chain"
            }
          </Caption>
          <IconsWrapper>
            <Image
              src={Discord}
              alt="image"
              height={20}
              style={{ width: "auto", height: "20px", cursor: "pointer" }}
            />
            <Image
              src={Twitter}
              alt="image"
              height={20}
              style={{ width: "auto", height: "20px", cursor: "pointer" }}
            />
            <Image
              src={Telegram}
              alt="image"
              height={20}
              style={{ width: "auto", height: "20px", cursor: "pointer" }}
            />
          </IconsWrapper>
        </TitleWrapper>
      </Container>
    </>
  )
}

const fadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(-10px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: black;
  position: relative;
  overflow: hidden;
  padding-right: 100px;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 58%;
  left: 30%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  animation: ${fadeIn} 2s ease-in-out;
`

const Title = styled.span`
  font-size: 42px;
  font-weight: 700;
  color: white;
  text-align: end;
`

const Subtitle = styled.span`
  font-size: 28px;
  font-weight: 300;
  color: white;
  text-align: end;
`

const Caption = styled.span`
  font-size: 15px;
  font-weight: 300;
  color: #b9b9b9;
  white-space: pre-line;
  text-align: end;
  letter-spacing: 1px;
  line-height: 20px;
  margin-top: 30px;
`

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`
