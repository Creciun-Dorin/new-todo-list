// React
import { Link } from 'react-router-dom';
// Scss
import s from './Ancora.module.scss';

const Page = (props) => {
    return (
        <Link className={s.link} to={props.href}>{props.content} <img src={props.svg} alt='svg button'></img></Link>
    )
}

export { Page }