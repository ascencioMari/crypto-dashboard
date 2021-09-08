/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "../../utils/AuthProvider";
import { Welcome } from "../Welcome";
import { Dashboard } from '../Dashboard';
import { PrivateRoute } from '../../utils/PrivateRoute';

//Propague the user context and the authentication
export const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*">
            <Redirect to={{ pathname: "/dashboard" }} />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};
