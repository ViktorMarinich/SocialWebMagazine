var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.MyRoutes = (
  <Route handler={App}>
    <DefaultRoute handler={MyFriends} />
    <Route handler={Users} path='users'/>
    <Route handler={AllNews} path='news'/>
    <Route handler={User} path='user/:userId'/>
  </Route>
);
