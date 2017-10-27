var Search = (props) => {
  // var onSearchButtonClick = (event) => {
  //   var options = { 
  //     key: window.YOUTUBE_API_KEY, 
  //     query: $('.form-control').val(), 
  //     max: 5 
  //   };
  //   //console.log('I was clicked!');
  //   searchYouTube(options, function(data) {
  //     var searchedVideosArr = [];
  //     data.items.map(function(video) {
  //       searchedVideosArr.push(video);
  //     });
  //     return searchedVideosArr;
  //   });
  // };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button onClick={function () {props.onSearchButtonClick($('.form-control').val())}} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

//youtube api: AIzaSyDPlFcHQhDcOquU4fFy1y4xFl88jjTqoGE