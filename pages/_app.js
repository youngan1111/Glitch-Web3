import styled from "@emotion/styled";
import Header from "../components/Header";
import "../styles/globals.css";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
