import axios from 'axios';

export const fetchMenuItems = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('/api/menu', { headers: { Authorization: `Bearer ${token}` } });
    dispatch({ type: 'SET_MENU_ITEMS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
