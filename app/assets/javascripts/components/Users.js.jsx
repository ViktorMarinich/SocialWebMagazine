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
              <div className="news-flex-box image-box border ">
                {(typeof user.avatar.url!='undefined')? <Link to={`/user/${user.id}`}><img  className="border" src={user.avatar.url} width='70' height='70'></img></Link>  : ""}
              </div>
              <h2>{user.name}</h2>
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
