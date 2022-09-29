import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

function PizzaList() {
  // declare useDispatch.
  const dispatch = useDispatch();

  // get the array of pizzas and send them to the reducer.
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

  
  // pizzaList = useSelector(store => store.pizzaListReducer);

  return (
    <h2>PizzaList</h2>
  
  );
}

export default PizzaList;
