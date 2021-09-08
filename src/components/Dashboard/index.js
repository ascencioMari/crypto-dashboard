/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { useUserContext } from "../../hooks/useUserContext";
import { Header } from "./Header";
import { CryptoProvider } from "../../utils/CryptoProvider";
import { Tabs } from "./Tabs";

export const Dashboard = () => {
  //Get user session
  const user = useUserContext();

  return (
    <CryptoProvider>
      <div>
        <Header user={user.session} />
        <Tabs />
      </div>
    </CryptoProvider>
  );
};
