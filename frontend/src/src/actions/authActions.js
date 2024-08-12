import axios from 'axios';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    // Fetch user data here
    const userResponse = await axios.get('/api/user', { headers: { Authorization: `Bearer ${token}` } });
    dispatch({ type: 'SET_USER', payload: userResponse.data });
  } catch (error) {
    console.error(error);
  }
};
