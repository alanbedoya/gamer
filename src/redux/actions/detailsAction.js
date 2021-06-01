import axios from 'axios';
import { gamesDetailsURL, gamesScreenshotsURL } from '../../common/api';

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  });

  const detailData = await axios.get(gamesDetailsURL(id));
  const screenshotsData = await axios.get(gamesScreenshotsURL(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screenshots: screenshotsData.data,
    },
  });
};
