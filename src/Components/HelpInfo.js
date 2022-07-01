import { Col, Container, Row } from 'react-bootstrap';
import '../Styling/HelpInfo.css'
import logistics from '../assets/delivery1.png'
import mproducts from '../assets/gift.png'
import returnbox from '../assets/returnbox.png'







function HelpInfo(){
    
    return(
        <Container>
        

        <Row >
        <h3 className='help-title1 text-center mt-3 mb-5'>Help Center</h3>

            <Col sm={12} md={6} lg={4} className='mt-5 d-block justify-content-center'>
                <img className='helpimgs' src={logistics} alt='logistics'/>
                <h3 className='help-title text-center'>Deliveries</h3>
                <p>Need Help concerning your Deliveries?</p>
                <p>Call:</p>
                <ul>
                    <li>0712 345 678</li>
                </ul>
            </Col>

            <Col sm={12} md={6} lg={4} className='mt-5'>
                <img className='helpimgs' src={mproducts} alt='products'/>
                <h3 className='help-title text-center'>Missing Products</h3>
                <p>Need Help concerning your missing products?</p>
                <p>Call:</p>
                <ul>
                    <li>911</li>
                </ul>
            </Col>

            <Col sm={12} md={6} lg={4} className='mt-5'>
            <img className='helpimgs' src={returnbox} alt='returns'/>

                <h3 className='help-title text-center'>Returns & Redunds</h3>
                <p>Need Help in returning your goods?</p>
                <p>Call:</p>
                <ul>
                    <li>0712 345 678</li>
                </ul>
            </Col>
        </Row>

    </Container>
    )
}

export default HelpInfo;