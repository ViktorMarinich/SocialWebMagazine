var Friendel = React.createClass({
  render: function() {
    return (
      <div className="friend">
          <Link to={`/user/${this.props.id}` }>
         <div className="friend-img">
          <img src={(typeof this.props.url!='undefined')? this.props.url  : "goodbye"} width='50' height='50'></img> 
         </div >
          <div className="friend-name">
            {this.props.name}
          </div>
          </Link>
      </div>
    );
  }
});
