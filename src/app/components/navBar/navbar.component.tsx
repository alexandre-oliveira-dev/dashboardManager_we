import {Button, Link, Text} from "@chakra-ui/react";
import "./style.css";

export default function NavBarComponent() {
  return (
    <nav className="nav-bar">
      <Text
        fontSize={"1xl"}
        textAlign={"center"}
        color={"#fff"}
        fontWeight={600}
      >
        Olá, seja bem vindo(a) {"ale@gmail.com"}
      </Text>
      <Link
        href="/dashboard"
        className="link-btn-navbar"
        style={{
          width: "90%",
          height: "40px",
          marginTop: "2rem",
          backgroundColor: "#121212",
          color: "#fff",
          display: "grid",
          placeContent: "center",
          fontSize: 20,
          textDecoration: "none",
          borderRadius: 10,
        }}
      >
        Inicio
      </Link>

      <Button className="btn-logout">Sair</Button>
    </nav>
  );
}
