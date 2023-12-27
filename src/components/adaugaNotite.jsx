// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Scss
import s from './adaugaNotite.module.scss';
// React
import { useState } from 'react';

const AdaugaNotite = () => {
    const [title, setTitle] = useState('');
    const [desk, setDesk] = useState('');
    const [local, setLocal] = useState(JSON.parse(localStorage.getItem('notite')) || []);
    class item {
        constructor(title, description, value) {
            this.title = title;
            this.description = description;
            this.value = value;
        }
    }

    const checkText = (e) => {
        setTitle(e.target.value);
    }

    const checkDesk = (e) => {
        setDesk(e.target.value);
    }

    const checkNot = () => {
        if (title.length > 5 && title.length < 35 && desk.length > 10 && desk.length < 150) {
            const object = new item(title, desk, false);
            if (object) {
                const newLocal = [...local, object];
                localStorage.setItem('notite', JSON.stringify(newLocal));
                setLocal(newLocal)
                setTitle('');
                setDesk('');
            }
        }
    }

    return (
        <form className={s.box}>
            <Form className={s.form}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Titlul notitei</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Titlu'
                        value={title}
                        onChange={checkText}
                        isInvalid={title.length < 5 || title.length > 35}
                        isValid={title.length >= 5 && title.length <= 35}
                    />
                    <Form.Control.Feedback type="invalid">
                        Titlul trebuie să aibă între 5 și 35 de caractere.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Titlul este valid.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder='Descriere'
                        value={desk}
                        onChange={checkDesk}
                        isInvalid={desk.length < 5 || desk.length > 150}
                        isValid={desk.length >= 5 && desk.length <= 150}
                    />
                    <Form.Control.Feedback type="invalid">
                        Descrierea trebuie să aibă între 5 și 150 de caractere.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                        Descrierea este valida.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
            <Button variant="success" onClick={checkNot} disabled={!(title.length >= 5 && title.length <= 35 && desk.length >= 5 && desk.length <= 150)}>Adauga</Button>
        </form>
    )
}

export { AdaugaNotite }