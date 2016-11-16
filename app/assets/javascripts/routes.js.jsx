var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.MyRoutes = (
  <Route handler={App}>
    <DefaultRoute handler={Profile} />
    <Route handler={MyFriends} path='friends'/>
    <Route handler={Users} path='users'/>

  </Route>
);
