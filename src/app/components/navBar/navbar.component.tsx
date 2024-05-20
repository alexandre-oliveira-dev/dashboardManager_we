import {Button, Text} from "@chakra-ui/react";
import "./style.css";
import {getAuth} from "firebase/auth";
import {app} from "@/app/auth/firebase";
import {signOut} from "firebase/auth";
import {useRouter} from "next/navigation";
import {useAuth} from "@/app/useAuth";
import Link from "next/link";

export default function NavBarComponent() {
  const auth = getAuth(app);
  const {push} = useRouter();
  const {user} = useAuth();

  async function logout() {
    await signOut(auth).then(() => {
      push("/");
    });
  }

  return (
    <nav className="nav-bar">
      <Text
        fontSize={"1xl"}
        textAlign={"center"}
        color={"#fff"}
        fontWeight={600}
      >
        Olá, seja bem vindo(a) {user?.email}
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

      <Button onClick={() => logout()} className="btn-logout">
        Sair
      </Button>
    </nav>
  );
}
