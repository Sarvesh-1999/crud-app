import { useParams } from "react-router-dom";
import { api } from "../axios/axiosInstance";
import { useEffect } from "react";

const EditEmpPage = () => {
  let { id } = useParams();
  console.log(id);

  async function getEditEmployee() {
    let res = await api.get(`/employees/${id}`);
    console.log(res.data);
  }

  useEffect(() => {
    getEditEmployee();
  }, []);

  return <div>EditEmpPage</div>;
};

export default EditEmpPage;
