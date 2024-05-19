import { api } from "./api"

export interface Employes{
    data: {
  _id?: string;
  name: string;
  admissionDate: string;
  office: string;
  departament: string;
  userId: string;
  }
}

export type EmployesProps = {
    data: {
        data:[{
  _id: string;
  name: string;
  admissionDate: Date;
  office: string;
  departament: string;
  userId: string;

    }],
    pageInfo:{
    page:number,
    pageSize:number,
    totalPages:number,
    totalDocuments:number
    }
}
}

const getEmployes = async (page?:number) => {
    const res:EmployesProps = await api.get(`/employes?page=${page}`)
    return res
}
const getEmploye = async (id:string) => {
    const res:Employes = await api.get(`/employe/${id}`)
    return res
}
const deleteEmploye = async (id:string) => {
    const res = await api.delete(`/delete/${id}`)
    return res
}
const createEmploye = async (body:Employes['data']) => {
    const res:EmployesProps = await api.post('/create',body)
    return res
}
const updateEmploye = async (id:string,body:Employes['data']) => {
    const res:EmployesProps = await api.put(`/update/${id}`,body)
    return res
}


export  {getEmployes,createEmploye,deleteEmploye,getEmploye,updateEmploye}