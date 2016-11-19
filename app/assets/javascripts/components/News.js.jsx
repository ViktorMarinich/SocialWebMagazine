var News = React.createClass({
  render: function() {
    return (
      <div className="news">
        <div>
        <h4><Link to={`/user/${this.props.id}`}>{this.props.user_name}</Link></h4>
                      <h5>{this.props.text}</h5>
        </div>
      </div>
    );
  }
});
