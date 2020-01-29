import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Input, CardBody } from 'reactstrap';

import Nav from '../../components/navigation';

const Calculator = () => {
  let [num, setNum] = useState(0);

  const add = () => {
    setNum(num += 1)
  }

  const min = () => {
    setNum(num -= 1);
  }

  return(
    <Container className="">
      <Row className="min-vh-100 justify-content-center align-items-center">
        <Col sm="5">
          <Nav location="calcu" /> you are at page : CALCULATOR
          <Card className="bg-dark text-light rounded-lg shadow">
            <CardBody>
              <h4 className="text-center mb-4">Counter</h4>
              <Input type="text" value={num} />
              <div className="mt-3">
                <Button color="danger" onClick={() => {add()}}> + </Button>
                <Button color="primary" onClick={() => {min()}}> - </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Calculator;