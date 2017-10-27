var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      key: options.key,
      videoEmbeddable: 'true',
      type: 'video',
      contentType: 'application/JSON' 
    },
    success: function (data) {
      console.log('get success!');
      callback(data);
      console.log(data);
      // this.setState((state) => ({videoQuery: videoData}));
      // this.setState((state) => ({currentVideo: videoData[0]}));
    },
    error: function (data) {      
      console.log('get failure');
      console.log(data.responseText);
    }  
  });

};

window.searchYouTube = searchYouTube;
