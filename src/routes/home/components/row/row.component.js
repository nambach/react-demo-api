import React from 'react';
import { Link } from 'react-router-dom';

const Row = ({
  id,
  name,
  email,
  address: { street, city } = {},
  phone
}) => (
    <tr>
      <td><Link to={`/detail/${id}`}>{name}</Link></td>
      <td>{email}</td>
      <td>{street}, {city}</td>
      <td>{phone}</td>
      <td></td>
    </tr>
  );

export default Row;