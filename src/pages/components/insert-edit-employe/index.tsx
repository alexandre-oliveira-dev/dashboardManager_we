"use client";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  useToast,
} from "@chakra-ui/react";
import "./style.css";
import {Employes, createEmploye, updateEmploye} from "@/service/routes";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {useRouter} from "next/navigation";
import {useAuth} from "@/pages/useAuth";

interface InsertProps {
  data?: Employes["data"] | undefined;
  isCreate: boolean;
}

export default function InsertOrEditComponent({data, isCreate}: InsertProps) {
  const toast = useToast();
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [departament, setDepartament] = useState("");
  const [admissionDate, setAdmissionDate] = useState<string | undefined>();
  const {refresh} = useRouter();
  const {user} = useAuth();

  useEffect(() => {
    async function setInitialValues() {
      if (data && !isCreate) {
        setName(data.name);
        setOffice(data.office);
        setDepartament(data.departament);
        setAdmissionDate(data.admissionDate);
      }
    }
    setInitialValues();
  }, [data, isCreate]);

  async function handleSubmit(event: any) {
    event.preventDefault();

    const payload: Employes["data"] = {
      name,
      admissionDate: dayjs(admissionDate).toISOString(),
      departament,
      office,
      userId: user?.email,
    };

    try {
      if (isCreate) {
        await createEmploye(payload).then(() => {
          toast({
            title: "Funcionario criado com sucesso",
            isClosable: true,
            duration: 2000,
            status: "success",
            onCloseComplete: () => {
              setName("");
              setOffice("");
              setDepartament("");
              setAdmissionDate("");
            },
          });
        });
        return;
      }
      if (data?._id)
        await updateEmploye(data?._id, payload).then(() => {
          toast({
            title: "Funcionario editado com sucesso",
            isClosable: true,
            duration: 2000,
            status: "success",
            onCloseComplete: () => {
              refresh;
            },
          });
        });
    } catch (err) {
      throw err;
    }
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
            <Input
              onChange={e => setName(e.target.value)}
              value={name}
              name="name"
              color={"#121212"}
              type="name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={"#121212"}>Cargo</FormLabel>
            <Input
              value={office}
              onChange={e => setOffice(e.target.value)}
              name="cargo"
              color={"#121212"}
              type="text"
            />
          </FormControl>
          <div
            style={{display: "flex", gap: 20, width: "100%", flexWrap: "wrap"}}
          >
            <FormControl isRequired style={{flex: 1}}>
              <FormLabel color={"#121212"}>Departamento</FormLabel>
              <Select
                value={departament}
                onChange={e => setDepartament(e.target.value)}
                name="dep"
                placeholder="Selecione"
              >
                <option style={{color: "#000"}} value="rh">
                  Rh
                </option>
                <option style={{color: "#000"}} value="software">
                  Software
                </option>
                <option style={{color: "#000"}} value="financeiro">
                  Financeiro
                </option>
              </Select>
            </FormControl>
            <FormControl isRequired style={{flex: 1}}>
              <FormLabel color={"#121212"}>Data de admissão</FormLabel>
              <Input
                value={
                  admissionDate &&
                  `${dayjs(admissionDate).format("YYYY-MM-DD")}`
                }
                onChange={e => setAdmissionDate(e.target.value)}
                name="date"
                type="date"
                color={"#121212"}
              />
            </FormControl>
          </div>
          <Input
            className="submit-btn"
            color={"#121212"}
            type="submit"
            value="Finalizar"
          ></Input>
        </form>
      </Box>
    </>
  );
}
