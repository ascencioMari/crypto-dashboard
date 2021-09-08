/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { Fragment } from "react";

//Welcome form input
export const Input = ({ label, name, type, required, pattern, placeholder }) => (
  <Fragment>
    <label htmlFor={name}>{label}</label>
    <input id={name} type={type} name={name} required={required} pattern={pattern} placeholder={placeholder} />
  </Fragment>
);