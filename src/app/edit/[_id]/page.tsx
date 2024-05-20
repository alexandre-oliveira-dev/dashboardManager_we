"use client";

import {useEffect, useState} from "react";
import InsertOrEditComponent from "@/app/components/insert-edit-employe";
import MainSectionComponent from "@/app/components/mainSection/mainSection.component";
import NavBarComponent from "@/app/components/navBar/navbar.component";
import {Text} from "@chakra-ui/react";
import {Employes, getEmploye} from "@/service/routes";
import {useAuth} from "@/app/useAuth";

export default function EditEmployeComponent() {
  const [initalValues, setInitialValues] = useState<Employes["data"]>();
  const {user} = useAuth();

/*   useEffect(() => {
    async function getInitialValues() {
      if (!user) {
        return null;
      }
      const router = window.location.href;

      const id = router.split("edit/")[1];
      if (id) {
        const res = await getEmploye(id);
        setInitialValues(res.data);
      }
    }
    getInitialValues();
  }, [user]);
 */
  return (
    <div style={{display: "flex"}}>
      <NavBarComponent />
      <MainSectionComponent
        components={
          <>
            <Text color={"#121212"} fontSize={"4xl"}>
              Editar Funcionario
            </Text>
{/*             <InsertOrEditComponent isCreate={false} data={initalValues} />
 */}          </>
        }
      />
    </div>
  );
}
