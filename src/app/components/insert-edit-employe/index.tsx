"use client";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
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
      <form
        onSubmit={handleSubmit}
        style={{
          width: "60%",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <FormControl isRequired>
          <FormLabel color={"#fff"}>Nome do funcionario</FormLabel>
          <Input name="name" color={"#FFF"} type="name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel color={"#fff"}>Cargo</FormLabel>
          <Input name="cargo" color={"#FFF"} type="text" />
        </FormControl>
        <div
          style={{display: "flex", gap: 20, width: "100%", flexWrap: "wrap"}}
        >
          <FormControl isRequired style={{flex: 1}}>
            <FormLabel color={"#fff"}>Departamento</FormLabel>
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
            <FormLabel color={"#fff"}>Data de admissão</FormLabel>
            <Input name="date" type="date" color={"#fff"} />
          </FormControl>
        </div>
        <Input color={"#fff"} type="submit" value="Finalizar"></Input>
      </form>
    </>
  );
}
