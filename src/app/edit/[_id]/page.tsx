"use client";

import {useEffect, useState} from "react";
import InsertOrEditComponent from "@/app/components/insert-edit-employe";
import MainSectionComponent from "@/app/components/mainSection/mainSection.component";
import NavBarComponent from "@/app/components/navBar/navbar.component";
import {Text} from "@chakra-ui/react";
import {Employes, getEmploye} from "@/service/routes";
import {useAuth} from "@/app/useAuth";

export default function EditEmployeComponent() {
  const router = window.location.href;
  const [initalValues, setInitialValues] = useState<Employes["data"]>();
  const {user} = useAuth();
  console.log("🚀 ~ EditEmployeComponent ~ user:", user);

  useEffect(() => {
    async function getInitialValues() {
      const id = router.split("edit/")[1];
      if (id) {
        const res = await getEmploye(id);
        setInitialValues(res.data);
      }
    }
    getInitialValues();
  }, [router]);

  if (!user) {
    return null;
  }
  return (
    <div style={{display: "flex"}}>
      <NavBarComponent />
      <MainSectionComponent
        components={
          <>
            <Text color={"#fff"} fontSize={"4xl"}>
              Editar Funcionario
            </Text>
            <InsertOrEditComponent isCreate={false} data={initalValues} />
          </>
        }
      />
    </div>
  );
}
