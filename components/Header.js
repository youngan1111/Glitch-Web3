import Link from "@mui/material/Link"
import styled from "@emotion/styled"
import Image from "next/image"
import Logo from "../assets/image/Logo.svg"
import { useRouter } from "next/router"

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
]

export default function Header() {
  const router = useRouter()
  return (
    <>
      <Container>
        <Link href="/" underline="none" color="inherit">
          <Image
            src={Logo}
            alt="Logo"
            height={48}
            style={{ width: "auto", height: "48px" }}
          />
        </Link>
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
                    color:
                      router.pathname === section.url ? "white" : "#BDBDBD",
                  }}
                >
                  {section.title}
                </Menu>
              </Link>
            )
          })}
        </MenuWrapper>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px 80px;
  background-color: #00000099;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`

const Menu = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #ebebeb;
`
