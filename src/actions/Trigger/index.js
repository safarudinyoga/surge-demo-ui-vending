import { actionTypes, API_URL } from 'src/config/constants';
// import axios from 'axios';

const triggerSuccess = () => ({
  type: actionTypes.GET_TRIGGER_SUCCESS,
});

const triggerFailure = () => ({
  type: actionTypes.GET_TRIGGER_FAILURE,
});

const triggerRequest = () => ({
  type: actionTypes.GET_TRIGGER_REQUEST,
});

const trigger = (payload) => async (dispatch) => {
  dispatch(triggerRequest());
  try {
    // const res = await axios.get()
  } catch (error) {

  }
};

export default trigger
;
