import React from 'react';
import Container from './components/Container'
import Title from './components/Title'
import HighestScorers from './components/HighestScorers'
import LeadersTable from './components/LeadersTable'

function App() {
  return (
    <>
    <Container>
      <Title/>
      <HighestScorers/>
      <LeadersTable/>
    </Container>
    </>
  );
}

export default App;
