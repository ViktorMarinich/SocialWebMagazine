var Profile = React.createClass({
  getInitialState() {
    return { users: [], current_user: []
    } },
    componentWillMount(){
      $.getJSON('users.json', (response) => { this.setState({ users: response }) });
      $.getJSON(`/users/1.json`, (response) => { this.setState({ current_user: response }) });
    },

  render: function() {
    current_user= this.state.current_user
    return (
      <div className='menu-item-medium'>
        <div className='container'>
          <div>{current_user.name}</div>
          <img src="#" width='200' height='200'></img>
        </div>
      </div>
    );
  }
});
