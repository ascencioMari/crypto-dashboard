/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { useCryptoContext } from "../../../hooks/useCryptoContext";
import { Row } from "./Row";
import { Tab } from "../styles";

//Show the list of historical values
export const Currency = ({ name }) => {
  //Get crypto context
  const crypto = useCryptoContext();

  return (
    <Tab>
      <li>
        <h2>
          {parseFloat(
            crypto.values[crypto.values.length - 1].cryptocompare[name].toFixed(2)).toLocaleString("es-MX")
          }
          <br />
          <span>CryptoCompare</span>
        </h2>
        <ol>
          {crypto.values.map((row) => (
            <Row
              key={row.date}
              price={row.cryptocompare[name]}
              date={row.date}
            />
          ))}
        </ol>
      </li>
      <li>
        <h2>
          {parseFloat(
            crypto.values[crypto.values.length - 1].coingecko[name].toFixed(2)
          ).toLocaleString("es-MX")}
          <br />
          <span>Gecko</span>
        </h2>
        <ol>
          {crypto.values.map((row) => (
            <Row key={row.date} price={row.coingecko[name]} date={row.date} />
          ))}
        </ol>
      </li>
    </Tab>
  );
};
