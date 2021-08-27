import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import { fetchLeaders } from './redux/leaders/leadersActions';

import Container from './components/Container/Container';
import Title from './components/Title/Title';
import HighestScorers from './components/HighestScorers/HighestScorers';
import LeadersList from './components/LeadersList/LeadersList';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchLeaders());
	}, []);

	return (
		<>
			<Container>
				<Title />
				<HighestScorers />
				<LeadersList />
			</Container>
			<ToastContainer />
		</>
	);
}

export default App;
