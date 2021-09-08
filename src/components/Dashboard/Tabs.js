/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { Fragment, useEffect, useState } from "react";
import { TabContent } from "./exchange/TabContent";
import { Converter } from "./Converter";
import { TabContainer } from "./styles";
import { useCryptoContext } from "../../hooks/useCryptoContext";
import { USD_VALUE, CURRENCY_NAMES, API_GEKCO, API_CRYPTO_COMPARE } from "../../constant";

//Covert USD to MXN
function convertUSDtoMXM(num) {
  return num * USD_VALUE;
}

//Get crypto coin values
async function allPromises(now) {

  //Call both services at the same time to avoid latency
  const allPromises = await Promise.all([
    fetch(API_GEKCO),
    fetch(API_CRYPTO_COMPARE)
  ]);

  //Get data from response services
  const allData = await Promise.all([
    allPromises[0].json(),
    allPromises[1].json()
  ]);

  return {
    coingecko: {
      BTC: convertUSDtoMXM(allData[0][0].current_price),
      ETH: convertUSDtoMXM(allData[0][1].current_price),
      XRP: convertUSDtoMXM(allData[0][2].current_price)
    },
    cryptocompare: {
      BTC: convertUSDtoMXM(allData[1].BTC.USD),
      ETH: convertUSDtoMXM(allData[1].ETH.USD),
      XRP: convertUSDtoMXM(allData[1].XRP.USD)
    },
    date: now
  }
}

export const Tabs = () => {
  //Init date state with current date 
  const [date, setDate] = useState(Date.now());

  //Init active tab state with BTC value
  const [activeTab, setActiveTab] = useState("BTC");

  //Get crypto context
  const crypto = useCryptoContext();

  //Listen date state to get the API data
  useEffect(() => {
    const timer = setTimeout(
      async () => {
        const now = Date.now();
        const fetchAPIs = allPromises(now);
        fetchAPIs.then(data => {
          crypto.update(crypto.values, data);
          setDate(now);
        });
      },
      5000
    );
    return () => clearTimeout(timer);
  }, [date]);

  if(!crypto.values.length) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
      <TabContainer>
        <ul>
          {CURRENCY_NAMES.map(currency => {
            return (
              <li key={currency}>
                <button
                  onClick={() => setActiveTab(currency)}
                  className={activeTab === currency ? "primary" : ""}>{currency}
                </button>
              </li>
            )
          })}
        </ul>
        <TabContent activeTab={activeTab} currencyNames={CURRENCY_NAMES} />
      </TabContainer>
      <Converter activeTab={activeTab} />
    </Fragment>
  )
}
