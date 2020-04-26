import React from "react";
import { Table, Pagination, Spinner } from "react-bootstrap";

import Row from "./components/row";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: 1,
    };
  }

  componentDidMount() {
    this.loadPage(1);
  }

  loadPage = (pageNumber) => {
    this.setState({ isLoading: true });
    fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${pageNumber}&_limit=5`
    )
      .then((res) => res.json())
      .then((data) => {
        this.props.setUsers(data);
        this.setState({ page: pageNumber, isLoading: false });
      });
  };

  render() {
    const { users } = this.props;
    const { page, isLoading } = this.state;

    if (isLoading) {
      return <Spinner animation="border" as="div" />;
    }

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Row key={user.id} {...user} />
            ))}
          </tbody>
        </Table>
        <Pagination>
          <Pagination.First onClick={() => this.loadPage(1)} />
          <Pagination.Prev
            onClick={() => {
              if (page > 1) this.loadPage(page - 1);
            }}
          />
          <Pagination.Item onClick={() => this.loadPage(1)} active={page === 1}>
            1
          </Pagination.Item>
          <Pagination.Item onClick={() => this.loadPage(2)} active={page === 2}>
            2
          </Pagination.Item>
          <Pagination.Next
            onClick={() => {
              if (page < 2) this.loadPage(page + 1);
            }}
          />
          <Pagination.Last onClick={() => this.loadPage(2)} />
        </Pagination>
      </div>
    );
  }
}
