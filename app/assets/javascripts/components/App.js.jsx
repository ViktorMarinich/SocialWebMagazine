var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var App = React.createClass({
  getInitialState() {
    return { current_user: [] }
  },
  componentWillMount(){
    $.getJSON(`/users/current.json`, (response) => {
      this.setState({ current_user: response }) });
  },
  signOut(){
    $.ajax({
      url: `/users/logout`,
      type: 'GET',
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
        <div className='menu-item border shadow'>
          <ul>
            <li>
              <Link to={`/user/${current_user.id}`}>My profile</Link>
            </li>
            <li>
              <Link to='/friends'>Friends</Link>
            </li>
            <li>
              <Link to='/'>News</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <a href='/users/logout'>Sign Out</a>
          </ul>
        </div>
        <div className="menu-item-large">
          <RouteHandler current_user={current_user}/>
        </div>
      </div>
    );
  }
});
