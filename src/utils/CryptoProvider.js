/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import {useState, createContext } from "react";

function useCrypto() {
  //Init crypto state
  const [values, setValues] = useState([]);

  //Update crypto state
  const update = (oldArray, newElement) => {
    if (oldArray.length > 19) {
      oldArray.shift();
    }
    setValues((oldArray) => [...oldArray, newElement]);
  };

  return { values, update };
}

//Create crypto context
export const CryptoContext = createContext();

//Create crypto provider and inicial value
export const CryptoProvider = ({ children }) => {
  const auth = useCrypto();

  return (
    <CryptoContext.Provider value={auth}>{children}</CryptoContext.Provider>
  );
};
