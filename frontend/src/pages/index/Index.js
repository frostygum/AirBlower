import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import axios from 'axios';

import Nav from '../../components/navigation';

const Index = () => {
  let [users, setusers] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/users/', {
      'Content-Type': 'text/plain',
      'crossDomain': 'true'
    })
    .then((res) => {
      setusers(res.data);
    })  
    .catch((err) => {
      console.log(err);
      alert(err + "\nsee details in dev console\ncommon: server off");
    })
  }, [])

  return(
    <Container>
      <Row className="mt-5">
        <Col sm="6">
          <Nav location="index"/> 
          
          <Card>
            <CardBody>
              <h4>Fetched Data</h4>
              {
                //? check users undefined or not
                users ? 
                //? if yes do mapping data
                users.map((user) => {
                  return(
                    <Row key={user.id}>
                      <Col sm="2">{user.id}</Col>
                      <Col sm="5">{user.username}</Col>
                      <Col sm="5">{user.address}</Col>
                    </Row>
                  )
                })
                //? else
                : 
                //? export empty string (do nothing)
                ""
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;