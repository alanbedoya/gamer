import axios from 'axios';
import { gamesDetailsURL } from '../../api';

const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gamesDetailsURL(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
    },
  });
};
