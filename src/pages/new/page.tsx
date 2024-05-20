"use client"

import InsertOrEditComponent from "@/pages/components/insert-edit-employe";
import MainSectionComponent from "@/pages/components/mainSection/mainSection.component";
import NavBarComponent from "@/pages/components/navBar/navbar.component";
import {useAuth} from "@/pages/useAuth";
import {Text} from "@chakra-ui/react";

export default function NewEmployeComponent() {

  const {user} = useAuth();
  if (!user) {
    return null;
  }
  return (
    <div style={{display: "flex"}}>
      <NavBarComponent></NavBarComponent>
      <MainSectionComponent
        components={
          <>
            <Text color={"#fff"} fontSize={"4xl"}>
              Novo Funcionario
            </Text>

            <InsertOrEditComponent isCreate={true}></InsertOrEditComponent>
          </>
        }
      ></MainSectionComponent>
    </div>
  );
}
