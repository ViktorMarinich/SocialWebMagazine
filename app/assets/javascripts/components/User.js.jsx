var User = React.createClass({
  getInitialState() {
    return { user: [] } },

    componentWillMount(nextProps) {
      $.getJSON(`/users/${this.props.params.userId}.json`, (response) => {
         this.setState({ user: response })
        });
      //  this.setState({user: this.props.params.userId})


   },
      render() {
        var name;
        user = this.state.user
        if (user.id ===2)
        {name= <h1>{user.name}</h1>}
        else {
          name = "Vasia"
        }
        return (
          <div>
            <h2>Hello</h2>
            {name}
          </div>
        )
      }
  });
