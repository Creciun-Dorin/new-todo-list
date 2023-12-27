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
// IMG
import png from '../lib/svg/png.png'

const Notite = () => {
    const [local, setLocal] = useState(JSON.parse(localStorage.getItem('notite')) || []);
    return (
        <Container>
            <Row>
                <Col>
                    <ol className={s.list}>
                        {
                            local && local.length > 0 ? (
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
                            ) : (
                                <h1> Momentan nu exista nici o notita! <img src={png} alt="Info" /></h1>
                            )
                        }
                    </ol>
                </Col>
            </Row>
        </Container>
    )
}

export { Notite }