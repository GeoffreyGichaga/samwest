import React, { useState } from 'react'
import { Button,Col, Offcanvas,Row,Nav,Tab } from 'react-bootstrap';
import '../Styling/SideMenu.css'


const SideMenu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas id='offcanvas' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} lg={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link id='side-links' eventKey="first">Electronics</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='side-links' eventKey="second">Jewelery</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='side-links' eventKey="third">Men's clothing</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='side-links' eventKey="fourth">Men's clothing</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SideMenu