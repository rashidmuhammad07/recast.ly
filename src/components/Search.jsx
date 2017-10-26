var Search = () => {
  var onSearchButtonClick = (event) => {
    console.log('I was clicked!');
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button onClick={onSearchButtonClick} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
