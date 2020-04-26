import React from 'react';

export default class User extends React.Component {

  render() {
    let {
      name,
      email,
      address: { street, city } = {},
      phone
    } = this.props;

    return (
      <div>
        <h3>{name}</h3>
        <p><i>{email}</i></p>
        <p><span>{street}, {city}</span></p>
        <p><span>{phone}</span></p>
      </div>
    );
  }
}