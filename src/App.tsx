<<<<<<< HEAD
import React, {useEffect} from 'react';
import operations from "./redux/leaders/leadersOperations"
import { useDispatch } from 'react-redux'
import Container from './components/Container'
import Title from './components/Title'
import HighestScorers from './components/HighestScorers'
import LeadersTable from './components/LeadersTable'

function App() {
  const dispatch: any = useDispatch()
  useEffect(() => dispatch(operations.fetchLeaders()), [dispatch]);

  return (
    <>
    <Container>
      <Title/>
      <HighestScorers/>
      <LeadersTable/>
    </Container>
    </>
  );
=======
import React from 'react';
import Title from './components/Title';
import HighestScorers from './components/HighestScorers';
import LeadersTable from './components/LeadersTable';

function App() {
	return (
		<>
			<Title />
			<HighestScorers />
			<LeadersTable />
		</>
	);
>>>>>>> 1567293... [004] - eslint and prettier
}

export default App;
