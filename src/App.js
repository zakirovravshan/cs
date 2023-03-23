import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { CategorySingle } from './pages/CategorySingle/CategorySingle';
import { Home } from './pages/Home/Home';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/category'>
					<Route path=':id' element={<CategorySingle />} />
				</Route>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
