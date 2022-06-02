import React from "react";
import './userRow.css';

const UserRow = (props) => {
  const user = props.user;

    return (
        <tr>
          <td>{user.login}</td>
          <td>{user.password}</td>
          <td>{user.isLocked}</td>
        </tr>
      );
}


export default UserRow