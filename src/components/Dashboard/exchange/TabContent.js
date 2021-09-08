/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { Currency } from "./Currency";

//Show the result from APIs
export const TabContent = ({ activeTab, currencyNames }) => {
  return (
    <ol>
      {currencyNames.map((currency) => {
        return (
          <li key={currency} className={activeTab === currency ? "active" : ""}>
            <Currency name={currency} />
          </li>
        );
      })}
    </ol>
  );
};
