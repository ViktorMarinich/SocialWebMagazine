var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var App = React.createClass({
  getInitialState() {
    return { current_user: []
    } },
    componentWillMount(){
      $.getJSON(`/users/1.json`, (response) => {
        this.setState({ current_user: response }) });
    },
  render: function() {
    current_user= this.state.current_user
    return (
      <div className='menu'>
        <div className='menu-item'>
          <ul>
            <li>
              <Link to='/users'>{current_user.name}</Link>
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
          </ul>
        </div>
        <div className="menu-item-large">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    );
  }
});
