/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";

//User context hook
export const useUserContext = () => {
  return useContext(AuthContext);
};
