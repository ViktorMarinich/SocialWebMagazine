var MyFriends = React.createClass({
  render() {
  var x = this.props.current_user
    return (
      <div>
        My friends
//        <h1>{current_user.name}</h1>
        {x.name}
        <div>

        </div>
      </div>
    );
  }
});
