import InsertOrEditComponent from "@/app/components/insert-edit-employe";
import MainSectionComponent from "@/app/components/mainSection/mainSection.component";
import NavBarComponent from "@/app/components/navBar/navbar.component";
import {Text} from "@chakra-ui/react";

export default function NewEmployeComponent() {
  return (
    <div style={{display: "flex"}}>
      <NavBarComponent></NavBarComponent>
      <MainSectionComponent
        components={
          <>
            <Text color={"#fff"} fontSize={"4xl"}>
              Novo Funcionario
            </Text>

            <InsertOrEditComponent></InsertOrEditComponent>
          </>
        }
      ></MainSectionComponent>
    </div>
  );
}
