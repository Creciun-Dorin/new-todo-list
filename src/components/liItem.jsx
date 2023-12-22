// Bootstrap
import Form from 'react-bootstrap/Form';
// Scss
import s from './Notite.module.scss';
import { useState } from 'react';
// React

const Item = (props) => {
    const [check, setCheck] = useState(props.value);

    const setCheckBox = (e, id) => {
        setCheck(e.target.checked);
        const item = [...props.local];
        item[props.id].value = e.target.checked;
        localStorage.setItem('notite', JSON.stringify(item));
        props.setLocal(item);
    }

    const deleteButton = (id) => {
        const item = [...props.local];
        item.splice(id, 1);
        localStorage.setItem('notite', JSON.stringify(item));
        props.setLocal(item)
    }

    return (
        <li key={props.key} className={check ? `${s.indeplinit} ` : ''}>
            <header className={`${s.header} mb-2`}>
                <label htmlFor={s.title}><h1>{props.title}</h1></label>
                <div className={s.grup}>
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Rezolvat"
                            checked={check}
                            onChange={setCheckBox}
                        />
                    </Form>
                    <button id={props.id} onClick={() => deleteButton(props.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                            <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                        </svg>
                    </button>
                </div>
            </header>
            <main className={s.main}>
                {props.content}
            </main>
        </li>
    )
}

export { Item }