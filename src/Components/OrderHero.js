import { Col, Container, Row } from 'react-bootstrap';
import '../Styling/Order.css'







function OrderHero(){
    return(
        <Container>
        <Row>
            <Col sm={12} md={6} lg={2} className='order-brief mt-4 '>
                <h3 className='order-title'>Orders</h3>
                All Orders
            </Col>

            <Col sm={12} md={6} lg={8} className='order-desc ms-2'>
                <h3 className='order-title mt-4'>Products</h3>
                Order Details

            </Col>

        </Row>

    </Container>
    )
}

export default OrderHero;