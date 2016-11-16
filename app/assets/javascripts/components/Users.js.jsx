var Users = React.createClass({

  render: function() {
    users= this.props.users.map( function(user) {
      return (
        <ul key={user.id}>
          <li>{user.name}</li>
          <li>{user.email}</li>
        </ul>
      );
    });
    return (
      <div>
        <h1>Users</h1>
        <div id="users">
              {users}
        </div>
      </div>
    );
  }
});
