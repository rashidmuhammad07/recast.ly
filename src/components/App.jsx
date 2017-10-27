class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],  
      videoQuery: window.exampleVideoData
    };
    
    this.onSearchButtonClick = (event) => {
      // event= $('.form-control').val() 
      var options = { 
        key: window.YOUTUBE_API_KEY, 
        query: event,
        max: 5 
      };
      this.props.searchYouTube(options, function(data) {
      //   var searchedVideosArr ,= [];
      //   data.items.map(function(video) {
      //     searchedVideosArr.push(video);
      //   });
      // });
        console.log(data);
      });
    };

    this.onTitleClick = (video) => {
      this.setState({
        currentVideo: video
      });
      console.log('fired in app');
    };
  }
  
  render() {
    return (
    <div>
    {console.log(this.props.searchYouTube)}
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search onSearchButtonClick={this.onSearchButtonClick}/></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList onTitleClick={this.onTitleClick} videos={this.state.videoQuery} />
        </div>
      </div>
    </div>
    );
  }
  
  componentDidMount() {
    this.onSearchButtonClick('cat');
    
    
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//video={window.exampleVideoData[0]}