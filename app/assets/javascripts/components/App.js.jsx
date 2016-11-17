var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var App = React.createClass({
  render: function() {
    return (
      <div className='menu'>
        <div className='menu-box'>
          <ul>
            <li>
              <Link to='/'>Profile</Link>
            </li>
            <li>
              <Link to='/friends'>My friends</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    );
  }
});
