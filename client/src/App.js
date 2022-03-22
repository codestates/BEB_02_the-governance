import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Footer />
		</div>
	);
}

export default App;