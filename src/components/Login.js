import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 } from 'uuid';



export default function Login({ onIdSumbit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onIdSumbit(idRef.current.value);

  }

  function createNewId() {
    onIdSumbit(v4());
  }



  return (
    <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
      <Form className='w-100' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="me-2 mt-2">Login</Button>
        <Button onClick={createNewId} variant="secondary" className="mt-2">Create A New ID</Button>
      </Form>
    </Container>
  )
};
