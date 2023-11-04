import { Container, Row, Col } from 'react-bootstrap'

import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <Row>
                <Col className='text-center py-3'>
                    <p>notescart &copy; {currentYear}</p>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer
