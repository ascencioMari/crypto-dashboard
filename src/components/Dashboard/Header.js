/**
 * @author María Guadalupe Ascencio Escamilla
 * @description
 * @version 1.0
 * * Version description:
 * v1.0 Created functions
 * @date Created at 04/09/2021 Last Modified at 07/09/2021
 */

//Import section
import { Nav, UserInfo } from "./styles";
import { AiOutlineUser } from "react-icons/ai";

//APP header
export const Header = ({ user }) => {
  return (
    <header>
      <Nav>
        <ul>
          <li>
            <strong>Crypto Compare</strong>
          </li>
          <li>
            <UserInfo>
              <button><AiOutlineUser /> Hi {user.firstName}</button>
              <div>
                <ol>
                  <li>
                    <strong>Name:</strong>
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  </li>
                  <li>
                    <strong>eMail:</strong>
                    <span>{user.email}</span>
                  </li>
                  <li>
                    <strong>Phone:</strong>
                    <span>{user.phone}</span>
                  </li>
                </ol>
              </div>
            </UserInfo>
          </li>
        </ul>
      </Nav>
    </header>
  );
};
