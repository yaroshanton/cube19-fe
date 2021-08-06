import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';

// Actions
import { fetchLeaders } from './redux/leaders/leadersActions';

// Components
import Container from './components/Container';
import Title from './components/Title';
import HighestScorers from './components/HighestScorers';
import LeadersTable from './components/LeadersTable';

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
				<LeadersTable />
			</Container>
			<ToastContainer />
		</>
	);
}

export default App;
