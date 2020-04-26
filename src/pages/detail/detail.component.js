import React from 'react';
import _ from 'lodash';

const UserView = ({
  name,
  email,
  address: { street, city } = {},
  phone
}) => (
    <div>
      <h3>{name}</h3>
      <p><i>{email}</i></p>
      <p><span>{street}, {city}</span></p>
      <p><span>{phone}</span></p>
      <button>EDIT</button>
    </div>
  );

const UserEdit = ({
  name,
  email,
  address: { street, city } = {},
  phone
}) => (
    <div>
      <form>
        <input type='text' value={name} /> <br />
        <input type='text' value={email} /> <br />
        <input type='text' value={street} />
        <input type='text' value={city} /> <br />
        <input type='text' value={phone} /> <br />
        <input type='submit' value='SAVE' />
        <button>CANCEL</button>
      </form>
    </div>
  );


export default class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isEditing: true
    };
  }

  componentDidMount() {
    const id = _.get(this.props, "match.params.id", 1);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data });
      });
  }

  render() {
    const { user, isEditing } = this.state;

    return isEditing ? <UserEdit {...user} /> : <UserView {...user} />;
  }
}