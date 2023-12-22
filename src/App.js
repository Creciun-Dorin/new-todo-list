import s from './App.module.scss';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import { Page } from './components/Ancora';
import { Notite } from './components/Notite';
import { AdaugaNotite } from './components/adaugaNotite';
// Svg
import add_icon from './lib/svg/add-icon.svg';
import menu from './lib/svg/menu.svg';
// React
import { Routes, Route } from 'react-router-dom';


function App() {
	return (
		<Container fluid className={s.wrapper}>
			<Row className={s.header}>
				<Col className={s.element}> 
					<Page href='/adauga-notita' content='Adauga notita' svg={add_icon} />
					<Page href='/' content='Notita' svg={menu} />
				</Col>
			</Row>
			<Row className={s.main}>
				<Col className={s.box}>
					<Routes>
						<Route path='/' element={<Notite />} />
						<Route path='/adauga-notita' element={<AdaugaNotite />} />
					</Routes>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
