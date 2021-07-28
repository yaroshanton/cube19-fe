import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from './redux/leaders/leadersOperations';
import Container from './components/Container';
import Title from './components/Title';
import HighestScorers from './components/HighestScorers';
import LeadersTable from './components/LeadersTable';
// import ModalEditLeaders from './components/modalEditLeaders';

function App() {
	const dispatch: any = useDispatch();
	useEffect(() => dispatch(operations.fetchLeaders()), [dispatch]);
	// const isModalEditLeadersOpen = useSelector(state => modalEditLeadersOpen(state));

	return (
		<>
			<Container>
				<Title />
				<HighestScorers />
				<LeadersTable />
				{/* {isModalEditLeadersOpen && <ModalEditLeaders />} */}
			</Container>
		</>
	);
}

export default App;
