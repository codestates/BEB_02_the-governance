import './App.css';
import { Route, Routes } from 'react-router-dom';
import Styled from 'styled-components';

// import Caver from 'caver-js';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import NFT from './pages/NFT';

import Modal from './components/modals/Modal';

// const caver = new Caver('http://localhost:8551/');

const backgroundImg = {
	// backgroundImage:
	// 	"url(https://source.unsplash.com/random/1920x1080)",
	// width: "100%",
    // height: "100%",
	// opacity: "0.5"
};

const App = () => {
	return (
		<div className="App" style={backgroundImg}>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/nft' element={<NFT />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;