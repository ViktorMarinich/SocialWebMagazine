var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.MyRoutes = (
  <Route handler={App}>
    <DefaultRoute handler={AllNews} />
    <Route handler={Users} path='users'/>
    <Route handler={MyFriends} path='friends'/>
    <Route handler={User} path='user/:userId'/>
  </Route>
);
