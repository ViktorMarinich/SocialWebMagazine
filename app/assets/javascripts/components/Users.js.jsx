var Router = ReactRouter.Router

var Users = React.createClass({
  getInitialState() {
    return { users: [] } },
    componentWillMount(){
      $.getJSON('users.json', (response) => { this.setState({ users: response }) });
//console.log('Component mounted');
    },
  contextTypes: {
     router: function(){React.PropTypes.object.isRequired}
 },

  handleClick(e){
   return( Router.browserHistory.push(`/users/${userId}`)
   )
  },
  render() {
     var self = this;
    users= this.state.users.map( function(user) {
      return (
        <div>
        <ul key={user.id}>
          <Link to={`/user/${user.id}` }>Users</Link>
          <Link to='/'>
          <li>{user.name}</li>
          </Link>
          <li onClick={self.handleClick}>{user.email}</li>
          <li onClick={self.handleClick}>{user.id}</li>
        <input refs='name' type="button" onClick={self.handleClick} value="Click Me!" />

        </ul>
      </div>

      );
    });
    return (
      <div>
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
