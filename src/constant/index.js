/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Constants for currency names, USD value and API URLs
export const CURRENCY_NAMES = ["BTC", "ETH", "XRP"];
export const USD_VALUE = 20;
export const API_GEKCO = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple';
export const API_CRYPTO_COMPARE = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD&api_key=f954257900400565c67a28f4bd929327734808584d03733cdcf4ced1a91b08c1';