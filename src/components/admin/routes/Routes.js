import LoginContainer from "../login/LoginContainer";
import Paths from "./Paths";
import ListDepartments from "../department/ListDepartments";
import DetailDepartment from "../department/DetailDepartment";
import EditDepartment from "../department/EditDepartment";
import AddDepartment from "../department/AddDepartment";
import DetailEmployee from "../employee/DetailEmployee";
import EditEmployee from "../employee/EditEmployee";
import ListEmployee from "../employee/ListEmployee";
import AddEmployee from "../employee/AddEmployee";

const routes = [
  {
    path: Paths.Login,
    main: () => <LoginContainer></LoginContainer>,
  },
  {
    path: Paths.HomePage,
    exact: true,
    main: () => <h1>Trang chu</h1>,
  },
  {
    path: "/departments",
    main: () => <ListDepartments></ListDepartments>,
  },
  {
    path: "/department-detail",
    main: () => <DetailDepartment></DetailDepartment>,
  },
  {
    path: "/department-edit/:id",
    main: () => <EditDepartment></EditDepartment>,
  },
  {
    path: "/department-add",
    main: () => <AddDepartment></AddDepartment>,
  },
  {
    path: "/employees",
    main: () => <ListEmployee></ListEmployee>,
  },
  {
    path: "/employee-detail",
    main: () => <DetailEmployee></DetailEmployee>,
  },

  {
    path: "/employee-edit/:id",
    main: () => <EditEmployee></EditEmployee>,
  },
  {
    path: "/employee-add",
    main: () => <AddEmployee></AddEmployee>,
  },
];

export default routes;
