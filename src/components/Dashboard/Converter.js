/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { useState } from "react";
import { useCryptoContext } from "../../hooks/useCryptoContext";
import { ConverterContainer } from "./styles";

//
export const Converter = ({ activeTab }) => {
  //Init convert to MXN state 
  const [convert, setConvert] = useState(0);

  //Get crypto context
  const crypto = useCryptoContext();

  //Handle input change
  const handleChange = event => {
    setConvert(event.target.value);
  }

  return (
    <ConverterContainer>
      <h2>Convert</h2>
      <ul>
        <li>
          <h3><label htmlFor="convert">MXN</label></h3>
          <input placeholder="0" onChange={handleChange} value={convert} name="convert" id="convert" />
        </li>
        <li>
          <h3>CryptoCompare</h3>
          <strong>$ {
            parseFloat(
              convert / crypto.values[crypto.values.length - 1].cryptocompare[activeTab].toFixed(2)
            ).toLocaleString("es-MX")
            }
          </strong>
        </li>
        <li>
          <h3>Gecko</h3>
          <strong>$ {
            parseFloat(
              convert / crypto.values[crypto.values.length - 1].coingecko[activeTab].toFixed(2)
            ).toLocaleString("es-MX")
            }
          </strong>
        </li>
      </ul>
    </ConverterContainer>
  )
}
