var Router = ReactRouter.Router

var Users = React.createClass({
  getInitialState() {
    return { users: [], current_user: []
    } },
    componentWillMount(){
      $.getJSON('users.json', (response) => { this.setState({ users: response }) });
      $.getJSON(`/users/100.json`, (response) => { this.setState({ current_user: response }) });
    },

  handleClick(e){
   return( Router.browserHistory.push(`/users/${userId}`)
   )
  },
  render() {
     var self = this;
    current_user= this.state.current_user
    users= this.state.users.map( function(user) {
      return (
        <div key={user.id}>
            <ul >
              <Link to={`/user/${user.id}` }>{user.name}</Link>
              <Link to='/'>
              <li>{user.friends}</li>
              </Link>
              <li onClick={self.handleClick}>{user.email}</li>
              <li onClick={self.handleClick}>{user.id}</li>
      //      <input refs='name' type="button" onClick={self.handleClick} value="Click Me!" />
            </ul>
      </div>
      );
    });
    return (
      <div  className="menu-item-medium">
        <h1>{current_user.name}</h1>
       <h1>{current_user.email}</h1>
          <Link to='/'>
        <h1 >Users</h1>
        </Link>
        <div id="users">
              {users}
        </div>
      </div>
    );
  }
});
