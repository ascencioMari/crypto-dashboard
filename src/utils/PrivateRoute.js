/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

//Private route
export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const user = useUserContext();
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user.session ? (
          <RouteComponent {...routeProps} />
        ) : (
          //If user is invalid it is redirected to welcome
          <Redirect to={"/welcome"} />
        )
      }
    />
  );
};
