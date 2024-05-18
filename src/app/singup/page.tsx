"use client";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import {useState} from "react";
import "../style.css";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {app} from "../auth/firebase";
import {useRouter} from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const {push} = useRouter();
  const auth = getAuth(app);

  async function createUser(event: any) {
    event.preventDefault();

    if (email && password) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => push("/"))
        .catch((err: string) => {
          const error = `${err}`;
          toast({
            title: `${error.split("Firebase: Error")[1]}`,
            status: "error",
          });
        });
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
        <Text fontSize={"4xl"}>Cadastrar</Text>

        <form
          onSubmit={createUser}
          className="form-login"
          style={{width: "70%"}}
        >
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
            value="Cadastrar"
          ></Input>
          <Link href="/">Entrar</Link>
        </form>
      </Box>
    </div>
  );
}
