var NewsItem = React.createClass({
  render: function() {
    return (
      <div className="news">
        <div className="news-flex-box">
          <div className="news-flex-row borderBot">
            <img scr={this.props.img}></img>
            <div className="news-flex-box">
              <h3 className="noPaddingNoMargin">{this.props.name}</h3>
              Image
            </div>
          </div>
          <div className="news-flex-row">
            <h3 className="noPaddingNoMargin">{this.props.text}</h3>
          </div>
        </div>
      </div>
    );
  }
});
