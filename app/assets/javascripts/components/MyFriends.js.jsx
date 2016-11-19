var MyFriends = React.createClass({
  getInitialState() {
    return { friends:[]}
  },
  componentWillMount() {
    $.getJSON(`/users/current.json`, (response) => {
       this.setState({friends: response.friends})
    });},
    
  render() {
    friends = this.state.friends.map( function (friend) {
      return <Friendel key={friend.id} id={friend.id} name={friend.name}/>
    })
  var x = this.props.current_user
    return (
      <div>
        My friends
        <div className='flex-box'>{friends}</div>
      </div>
    );
  }
});
