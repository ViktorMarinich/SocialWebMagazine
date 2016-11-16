var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <nav>
          <ul>
              <Link to='/'>Profile</Link>
              <Link to='/friends'>My friends</Link>
              <Link to='/users'>Users</Link>
          </ul>
        </nav>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});
