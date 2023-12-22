// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Scss
import s from './Notite.module.scss';
import { Item } from './liItem';
// React
import { useState } from 'react';

const Notite = () => {
    const [local, setLocal] = useState(JSON.parse(localStorage.getItem('notite')) || []);
    return (
        <Container>
            <Row>
                <Col>
                    <ol className={s.list}>
                        {
                            local.map((element, index) => (
                                <Item
                                    // Date content
                                    key={index}
                                    title={element.title}
                                    content={element.description}
                                    value={element.value}
                                    id={index}
                                    // Date state
                                    local={local}
                                    setLocal={setLocal}
                                />
                            ))
                        }
                    </ol>
                </Col>
            </Row>
        </Container>
    )
}

export { Notite }