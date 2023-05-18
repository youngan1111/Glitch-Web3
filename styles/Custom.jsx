import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 20px;
  background-color: black;
`;

const DauWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const DauBox = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;

const Caption = styled.span`
  font-size: 14px;
  color: white;
  font-weight: 500;
  text-align: center;
  opacity: 0.6;
`;

const Title = styled.span`
  font-size: 20px;
  color: white;
  font-weight: 700;
  text-align: center;
  opacity: 0.8;
`;

const Subtitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: white;
  opacity: 0.5;
`;

export { Container, DauWrapper, DauBox, Caption, Title, Subtitle };
