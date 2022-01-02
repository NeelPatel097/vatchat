import './App.scss';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Row className="bg-white py-5">
        <Col sm={8} md={6} lg={4}>
          <h1 className='text-center'>Register</h1>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <br/>
            <div className='text-center'>
              <Button variant="success" type="submit">
                Register
              </Button>
            </div>
        </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
