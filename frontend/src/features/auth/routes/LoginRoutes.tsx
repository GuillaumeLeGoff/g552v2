
import UserService from "../api/userService";
import { LoginFormComponent } from "../components/login";


const loginRoutes = [
  {
    path: "",
    element: <LoginFormComponent />,
    loader: () => {
      const users = UserService.getUsers();
      return users;
    }
  },/* {
    path:"/firstLogin",
    element: <ChangePasswordOnFirstLoginFormComponent />,
  } */
];

export default loginRoutes;
