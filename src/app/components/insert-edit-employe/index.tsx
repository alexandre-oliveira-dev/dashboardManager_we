"use client";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Box,
} from "@chakra-ui/react";
import "./style.css";

export default function InsertOrEditComponent() {
  function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const payload = {
      name: formData.get("name"),
      cargo: formData.get("cargo"),
      dep: formData.get("dep"),
      date: formData.get("date"),
    };
    console.log(payload);
  }
  return (
    <>
      <Box
        style={{
          width: "60%",
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <FormControl isRequired>
            <FormLabel color={"#121212"}>Nome do funcionario</FormLabel>
            <Input name="name" color={"#121212"} type="name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={"#121212"}>Cargo</FormLabel>
            <Input name="cargo" color={"#121212"} type="text" />
          </FormControl>
          <div
            style={{display: "flex", gap: 20, width: "100%", flexWrap: "wrap"}}
          >
            <FormControl isRequired style={{flex: 1}}>
              <FormLabel color={"#121212"}>Departamento</FormLabel>
              <Select name="dep" placeholder="Selecione">
                <option style={{color: "#000"}} value="rh">
                  Rh
                </option>
                <option style={{color: "#000"}} value="Software">
                  Software
                </option>
                <option style={{color: "#000"}} value="Financeiro">
                  Financeiro
                </option>
              </Select>
            </FormControl>
            <FormControl isRequired style={{flex: 1}}>
              <FormLabel color={"#121212"}>Data de admissão</FormLabel>
              <Input name="date" type="date" color={"#121212"} />
            </FormControl>
          </div>
          <Input className="submit-btn" color={"#121212"} type="submit" value="Finalizar"></Input>
        </form>
      </Box>
    </>
  );
}
