var Profile = React.createClass({
  getInitialState() {
    return { users: [], current_user: [], friends:[]
    } },
    componentWillMount(){
      $.getJSON('users.json', (response) => { this.setState({ users: response }) });
      $.getJSON(`/users/1.json`, (response) => {
        this.setState({ current_user: response })
        this.setState({friends: response.friends})
    });

    },

  render: function() {
    current_user= this.state.current_user
    friends = this.state.friends.map( function (friend) {
      return (
        <div>
          <h1><Link to={`/user/${friend.id}` }>{friend.name}</Link></h1>
          <h1>{friend.email}</h1>
        </div> );
    })
return (
      <div className='menu-item-medium'>
        <div className='container'>
          <div>{current_user.name}</div>
          <img src="#" width='200' height='200'></img>
          <h1>Friends</h1>
          <p>{friends}</p>
        </div>
      </div>
    );
  }
});
