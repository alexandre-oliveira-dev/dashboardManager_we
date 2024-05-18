"use client"

import InsertOrEditComponent from "@/app/components/insert-edit-employe";
import MainSectionComponent from "@/app/components/mainSection/mainSection.component";
import NavBarComponent from "@/app/components/navBar/navbar.component";
import {useAuth} from "@/app/useAuth";
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
