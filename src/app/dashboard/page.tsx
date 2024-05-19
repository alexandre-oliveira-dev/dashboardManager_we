"use client";
import {
  Button,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import "./index.css";
import NavBarComponent from "@/app/components/navBar/navbar.component";
import {FiEdit, FiTrash} from "react-icons/fi";
import MainSectionComponent from "@/app/components/mainSection/mainSection.component";
import React, {useEffect, useState} from "react";
import {EmployesProps, deleteEmploye, getEmployes} from "@/service/routes";
import {useAuth} from "../useAuth";
import Link from "next/link";

export default function Dashboard() {
  const [data, setData] = useState<EmployesProps["data"]["data"]>();
  const [pageInfo, setPageInfo] = useState<EmployesProps["data"]["pageInfo"]>();
  const [load, setLoad] = useState(false);
  const toast = useToast();
  const {user} = useAuth();
  useEffect(() => {
    setLoad(true);
    async function get() {
      const res = await getEmployes(1).finally(() => setLoad(false));
      if (user?.email) {
        //@ts-ignore
        setData(res?.data?.data.filter(item => item.userId === user.email));
      }
      setPageInfo(res?.data.pageInfo);
    }
    get();
  }, [user?.email]);

  if (!user) {
    return null;
  }

  async function refetch() {
    setLoad(true);
    const newDate = (await getEmployes(1).finally(() => setLoad(false))).data;
    return setData(
      //@ts-ignore
      newDate?.data?.filter(item => item.userId === user.email)
    );
  }

  const Pagination = () => {
    let buttons: React.ReactNode[] = [];
    if (pageInfo?.totalPages)
      for (let i = 0; i < pageInfo?.totalPages; i++) {
        buttons.push(
          <button
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#fff",
              marginLeft: "5px",
            }}
            onClick={async () => {
              const res = await getEmployes(i + 1).finally(() =>
                setLoad(false)
              );
              setData(res?.data?.data);
              setPageInfo(res?.data.pageInfo);
            }}
            key={i}
            type="button"
            className="btnPage"
          >
            {i + 1}
          </button>
        );
      }
    return buttons;
  };

  return (
    <div className="container-dashboard">
      <NavBarComponent></NavBarComponent>
      <MainSectionComponent
        components={
          <>
            <Text color={"#fff"} fontSize={"6xl"}>
              Funcionarios
            </Text>
            <TableContainer className="table-box">
              <Link
                href="/new"
                /* _hover={{
                  backgroundColor: "rgb(21, 255, 87) !important",
                  color: "#fff",
                }} */
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
              <Table
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  position: "relative",
                }}
                size="sm"
              >
                <Thead className="thead" border={0}>
                  <Tr>
                    <Th>Nome</Th>
                    <Th>Cargo</Th>
                    <Th>Departamento</Th>
                    <Th>Ações</Th>
                  </Tr>
                </Thead>
                {load ? (
                  <Tbody
                    style={{
                      height: "300px",
                      backgroundColor: "#fff",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        transform: "translate(-50% -50%)",
                        top: "50%",
                        left: "50%",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <Spinner />
                      Carregando ...
                    </div>
                  </Tbody>
                ) : (
                  <Tbody
                    className="tbody"
                    style={{
                      width: "100%",
                      minHeight: "400px !important",
                      backgroundColor: "#fff ",
                    }}
                  >
                    {data?.map(item => {
                      return (
                        <Tr
                          key={item._id}
                          _hover={{backgroundColor: "aliceblue"}}
                          transition={"0.3s ease"}
                        >
                          <Td>{item.name}</Td>
                          <Td>{item.office}</Td>
                          <Td>{item.departament}</Td>

                          <Td>
                            <div style={{display: "flex", gap: 10}}>
                              <Link
                                href={`/edit/${item._id}`}
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  display: "grid",
                                  placeContent: "center",
                                  backgroundColor: "gold",
                                  borderRadius: "5px",
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
                                onClick={async () =>
                                  await deleteEmploye(item._id).then(
                                    async () => {
                                      await refetch();
                                      toast({
                                        title:
                                          "Funcionario excluido com sucesso!",
                                        status: "success",
                                        isClosable: true,
                                      });
                                    }
                                  )
                                }
                              >
                                <FiTrash color="#fff"></FiTrash>
                              </Button>
                            </div>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                )}
              </Table>
              <div style={{float: "inline-end", marginTop: "2rem"}}>
                <Pagination></Pagination>
              </div>
            </TableContainer>
          </>
        }
      ></MainSectionComponent>
    </div>
  );
}
