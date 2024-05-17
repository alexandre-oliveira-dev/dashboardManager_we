import {
  Button,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "./index.css";
import NavBarComponent from "@/app/components/navBar/navbar.component";
import {FiEdit, FiTrash} from "react-icons/fi";
import MainSectionComponent from "@/app/components/mainSection/mainSection.component";

const data = [
  {
    id: 1,
    name: "alexandre",
    cargo: "desenvolvedor web pleno",
    dep: "software",
  },
  {
    id: 2,
    name: "mel",
    cargo: "Biomedica",
    dep: "diagnostico",
  },
];

export default function Dashboard() {
  return (
    <div className="container-dashboard">
      <NavBarComponent></NavBarComponent>
      <MainSectionComponent
        components={
          <>
            <Text color={"#fff"} fontSize={"6xl"}>
              Employes
            </Text>
            <TableContainer className="table-box">
              <Link
                href="/dashboard/new"
                _hover={{
                  backgroundColor: "rgb(21, 255, 87) !important",
                  color: "#fff",
                }}
                style={{
                  float: "inline-end",
                  margin: "0 0 10px 0",
                  width: "max-content",
                  backgroundColor: "rgb(44, 204, 41)",
                  height: "40px",
                  display: "grid",
                  placeContent: "center",
                  fontSize: 17,
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                + Novo funcionario
              </Link>
              <Table style={{width: "100%"}} size="sm">
                <Thead className="thead" border={0}>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Cargo</Th>
                    <Th>Departamento</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                <Tbody className="tbody" style={{width: "100%"}}>
                  {data.map(item => {
                    return (
                      <Tr key={item.id} _hover={{backgroundColor: "red"}}>
                        <Td>{item.name}</Td>
                        <Td>{item.cargo}</Td>
                        <Td>{item.dep}</Td>

                        <Td>
                          <div style={{display: "flex", gap: 10}}>
                            <Link
                              href={"/dashboard/edit"}
                              style={{
                                width: "40px",
                                height: "40px",
                                display: "grid",
                                placeContent: "center",
                                backgroundColor: "gold",
                                borderRadius:"5px"
                              }}
                            >
                              <FiEdit color="#fff"></FiEdit>
                            </Link>
                            <Button
                              style={{
                                width: "40px",
                                height: "40px",
                                display: "grid",
                                placeContent: "center",
                                backgroundColor: "red",
                              }}
                            >
                              <FiTrash color="#fff"></FiTrash>
                            </Button>
                          </div>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        }
      ></MainSectionComponent>
    </div>
  );
}
