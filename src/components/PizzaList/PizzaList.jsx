import axios from 'axios';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function PizzaList() {
  // declare useDispatch.
  const dispatch = useDispatch();

  const pizzaList = useSelector(store => store.pizzaListReducer);


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
      {pizzaList.map()}
    </section>
  );
}

export default PizzaList;
