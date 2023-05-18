import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const sections = [
  {
    title: "Transactions",
    url: "/transactions",
  },
  {
    title: "DAU",
    url: "/dau",
  },
  {
    title: "Today Txns",
    url: "/todayTxns",
  },
  // {
  //   title: "BINANCE Perp vs Quarter",
  //   url: "/binancePerpQuarter",
  // },
  // {
  //   title: "Arbitrage testnet",
  //   url: "/arbitrageTestnet",
  // },
  // {
  //   title: "Ref.finance",
  //   url: "/refFinance",
  // },
  // {
  //   title: "Ferum",
  //   url: "/ferum",
  // },
];

export default function Header({ path }) {
  return (
    <>
      <Container>
        <Logo>
          <Link href="/" underline="none" color="inherit">
            zkBNB analytics
          </Link>
        </Logo>
        <MenuWrapper>
          {sections.map((section) => {
            return (
              <Link
                underline="hover"
                color="inherit"
                noWrap
                key={section.url}
                variant="body2"
                href={section.url}
              >
                <Menu
                  style={{
                    color: path === section.url ? "white" : "#BDBDBD",
                  }}
                >
                  {section.title}
                </Menu>
              </Link>
            );
          })}
        </MenuWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 80px;
  background-color: #000000;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const Logo = styled.span`
  font-size: 28px;
  font-weight: 900;
  padding: 0px;
  color: white;
`;

const Menu = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #ebebeb;
`;
