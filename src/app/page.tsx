"use client";

import {Box, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useState} from "react";
import "./style.css";
import firebase from "firebase/compat/app";

export default function Home() {
  const [email, setEmail] = useState<FormDataEntryValue | null>("");
  const [password, setPassword] = useState<FormDataEntryValue | null>("");

  async function login(event: any) {
    event.preventDefault();

    const data = new FormData(event.target);

    setEmail(data.get("email"));
    setPassword(data.get("password"));

    if (email && password) {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.toString(), password.toString())
        .then(value => console.log(value));
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
        <form onSubmit={login} className="form-login" style={{width: "70%"}}>
          <FormControl isRequired>
            <FormLabel color={"#fff"}>Email</FormLabel>
            <Input name="email" color={"#fff"} type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={"#fff"}>Senha</FormLabel>
            <Input name="password" color={"#fff"} type="password" />
          </FormControl>
          <Input type="submit" color={"#fff"} value="Entrar"></Input>
        </form>
      </Box>
    </div>
  );
}
