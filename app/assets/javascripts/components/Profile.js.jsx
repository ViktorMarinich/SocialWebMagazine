var Profile = React.createClass({
  getInitialState() {
    return { news: [] }
  },
    componentWillMount(){
      $.getJSON('users.json', (response) => { this.setState({ users: response }) });
    //  $.getJSON(`/users/100.json`, (response) => {
  //      this.setState({friends: response.friends})
  //  });

    },

  render() {

return (

    );
  }
});
