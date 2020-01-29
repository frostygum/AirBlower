import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';

const Nav = (props) => {
  return(
    <div className="mb-3">
      <ButtonGroup>
        <Button 
          disabled={props.location === "index" ? true : false}
          onClick={() => {window.location.href = '/'}}
        >
          INDEX
        </Button>
        <Button 
          disabled={props.location === "calcu" ? true : false}
          onClick={() => {window.location.href = '/calculator'}}
        >
          CALCU
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Nav;