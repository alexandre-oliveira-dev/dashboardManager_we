"use client";

import {Box, FormControl, FormLabel, Input, Link, Text} from "@chakra-ui/react";
import {useState} from "react";
import "./style.css";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "./auth/firebase";
import {useRouter} from "next/navigation";
import {useAuth} from "./useAuth";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {push} = useRouter();
  const {user} = useAuth();
  const auth = getAuth(app);

  if (user) {
    return push("./dashboard");
  }

  async function login(event: any) {
    event.preventDefault();

    if (email && password) {
      await signInWithEmailAndPassword(auth, email, password).then(
        (value: any) => {
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: value.user.email,
              token: value.user.accessToken,
            })
          );

          push("./dashboard");
        }
      );
    }
  }
  return (
    <div className="login-page">
      <Box
        style={{
          width: "40%",
          backgroundColor: "#515151",
          borderRadius: 10,
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text fontSize={"4xl"}>Entrar</Text>
        <form onSubmit={login} className="form-login" style={{width: "70%"}}>
          <FormControl isRequired>
            <FormLabel color={"#fff"}>Email</FormLabel>
            <Input
              onChange={e => setEmail(e.target.value)}
              name="email"
              color={"#fff"}
              type="email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={"#fff"}>Senha</FormLabel>
            <Input
              onChange={e => setPassword(e.target.value)}
              name="password"
              color={"#fff"}
              type="password"
            />
          </FormControl>
          <Input
            _hover={{backgroundColor: "#fff", color: "#000"}}
            type="submit"
            color={"#fff"}
            value="Entrar"
            cursor={"pointer"}
          ></Input>
          <Link href="./singup">cadastrar</Link>
        </form>
      </Box>
    </div>
  );
}
