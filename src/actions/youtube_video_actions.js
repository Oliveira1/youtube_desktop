import * as YoutubeVideoAPI from '../util/youtube_video_util';

// Search Video Actions
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const clearVideos = () => ({
  type: CLEAR_VIDEOS
});

export const searchVideos = query => dispatch => {
  console.log('calling search api');
  return YoutubeVideoAPI.fetchVideos(query).then(
    res => res.json()
  ).then(
    videos => {
      videos['query'] = query;
      return dispatch(receiveVideos(videos))
    }
  ).catch(
    err => console.log(err)
  );
};

// Trending Actions
export const RECEIVE_TRENDING = 'RECEIVE_TRENDING';

export const receiveTrending = videos => ({
  type: RECEIVE_TRENDING,
  videos
});

export const fetchTrending = () => dispatch => {
  return YoutubeVideoAPI.fetchTrending().then(
    res => res.json()
  ).then(
    videos => dispatch(receiveTrending(videos.items))
  ).catch(
    err => console.log(err)
  );
};
