import axios from 'axios';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem';

function PizzaList() {
  // declare useDispatch.
  const dispatch = useDispatch();
  // set pizzaList to the list of pizza from the pizzaListReducer.
  const pizzaList = useSelector(store => store.pizzaList);

  // get the array of pizzas and send them to the reducer.
  const fetchZa = () => {
    axios.get('/api/pizza')
    .then((response) => {
      console.log('axios GET for /api/pizza');
      // dispatch all of the za to the reducer.
      dispatch({
        type: 'ADD_PIZZA_LIST',
        payload: response.data
      });
    })
    .catch(err => console.log('Error getting za', err));
  }

  useEffect(() => {
    fetchZa();
  }, []);

  return (
    <section>
      <h2>Step 1: Get Your Za Broski!</h2>
      {pizzaList.map(za => (
        <PizzaListItem za={za} />
      ))}
    </section>
  );
}

export default PizzaList;
