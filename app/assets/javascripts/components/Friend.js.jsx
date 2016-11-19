var Friendel = React.createClass({
  render: function() {
    return (
      <div className="friend">
          <Link to={`/user/${this.props.id}` }>
         <div className="friend-img">
          <img src="/uploads/user/avatar/203/1.jpg" width='50' height='50'></img>
         </div >
          <div className="friend-name">
            {this.props.name}
          </div>
          </Link>
      </div>
    );
  }
});
