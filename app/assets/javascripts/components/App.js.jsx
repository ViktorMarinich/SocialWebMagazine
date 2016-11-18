var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var App = React.createClass({
  getInitialState() {
    return { current_user: []
    } },
    componentWillMount(){
      $.getJSON(`/users/100.json`, (response) => {
        this.setState({ current_user: response }) });
    },
    handleLogin() {
//var name = this.refs.name.value;
            var email = this.refs.email.value;

        //    var description = this.refs.description.value;
      //      var user = { name: name , email: email};
            $.ajax({
                    url: `/sessions`,
                    type: 'POST',
                    data: { session: {email: this.refs.email.value , password: this.refs.password.value}
                    },
                    success: (response)=>{
                      console.log(response)
                    //this.handleUpdateNews(response);
                    },
                    error: (response)=>{
                      console.log(response.responseText)
                    }
                });

    //    console.log(name)
        console.log(email)

    },

  render: function() {
    if (false) {
      menu = (
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
          </ul>
        </div>
        <div className="menu-item-large">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )} else {
    menu= (
      <div>
        <input type='text' ref='email'  />
        <input type='password' ref='password'  />
        <button onClick={this.handleLogin}>Sign In</button>
      </div>)
    }
    current_user= this.state.current_user
    return (
      menu
    );
  }
});
