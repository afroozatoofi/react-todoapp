import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
//import MyVerticallyCenteredModal from './Components/Showcases/Modal'

const Header = () => {
    return (  
             <Jumbotron>
              <h2 className="header">
                Hi Afrooz!<br/>
                Welcome To Your To-Do List
              </h2>
              {/* bad az react Hook check mikonam */}
              {/* <p>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
              </p> */}
            </Jumbotron>
    );
}
 
export default Header;