import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { fetchLeaders } from './redux/leaders/leadersOperations';

// Components
import Container from './components/Container';
import Title from './components/Title';
import HighestScorers from './components/HighestScorers';
import LeadersTable from './components/LeadersTable';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchLeaders());
	}, [dispatch]);

	return (
		<>
			<Container>
				<Title />
				<HighestScorers />
				<LeadersTable />
			</Container>
		</>
	);
}

export default App;
