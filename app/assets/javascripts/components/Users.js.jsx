var Router = ReactRouter.Router

var Users = React.createClass({
  getInitialState() {
    return { users: [], current_user: []
    } },
    componentWillMount(){
      $.getJSON('users.json', (response) => { this.setState({ users: response }) });
    },

  render() {
     var self = this;
    current_user= this.state.current_user
    users= this.state.users.map( function(user) {
      return (
        <div key={user.id} className='friend-flex'>
          <div className="friends-box " >
            <div className="friend-flex-row border">
              <Link to={`/user/${user.id}`}>
              <div className="news-flex-box image-box border ">
                {(typeof user.avatar.url!='undefined')? <img  className="border" src={user.avatar.url} width='70' height='70'></img> : ""}
              </div>
              </Link>
              <h2>
                <Link to={`/user/${user.id}`}>
                  {user.name}
                </Link>
                </h2>
             </div>
          </div>
        </div>)
  })
  return (
   <div className="border shadow margin-left">
     <h3 className="align-center">All Users</h3>
     {users}
   </div>
  );
  }
});
