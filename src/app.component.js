import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

import Home from './routes/home';
import Detail from './routes/detail';
import Setting from './routes/setting';

import './app.style.scss';

class App extends React.Component {
  render() {

    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
              <Nav.Link><Link to="/setting">Setting</Link></Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/setting/" component={Setting} />
          </Switch>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
