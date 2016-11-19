var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var App = React.createClass({
  getInitialState() {
    return { current_user: []
    } },
    componentWillMount(){
      $.getJSON(`/users/current.json`, (response) => {
        this.setState({ current_user: response }) });
    },
  signOut(){
    $.ajax({
            url: `/sessions/${this.state.current_user.id}`,
            type: 'DELETE',
            data: { session: {id: this.state.current_user.id}
            },
            success: (response)=>{
              console.log(response)
            this.handleUpdateNews(response);
            },
            error: (response)=>{
              console.log(response.responseText)
            }
        });
  },
  render: function() {
    current_user= this.state.current_user
    return (
      <div className='menu'>
        <div className='menu-item'>
          <ul>
            <li>
              <Link to={`/user/${current_user.id}`}>My profile</Link>
            </li>
            <li>
              <Link to='/'>My friends</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <a href='/' onClick={this.signOut}>Sign Out</a>
          </ul>
        </div>
        <div className="menu-item-large">
          <RouteHandler current_user={current_user}/>
        </div>
      </div>
    );
  }
});
