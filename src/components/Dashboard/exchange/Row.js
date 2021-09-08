/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Format date
function formatDate(date) {
  const customFormat = {
    HH: date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`,
    mm: date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`,
    SS: date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`,
    DD: date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`,
    MM: date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
    YY: date.getFullYear(),
  };

  return `${customFormat.DD}/${customFormat.MM}/${customFormat.YY} - ${customFormat.HH}:${customFormat.mm}:${customFormat.SS}`;
}

//Currency row
export const Row = ({ date, price }) => {
  const stringDate = new Date(date);
  return (
    <li>
      <span>{formatDate(stringDate)}</span>
      <span>$ {parseFloat(price.toFixed(2)).toLocaleString("es-MX")}</span>
    </li>
  );
};
