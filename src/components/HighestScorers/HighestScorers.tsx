import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import operations from "../../redux/leaders/leadersOperations"
import './HighestScorers.scss'

const HighestScorers = () => {

  const dispatch: any = useDispatch()
  useEffect(() => dispatch(operations.fetchLeaders()), []);

  return (
    <h1>HighestScorers</h1>
  )
}

export default HighestScorers;