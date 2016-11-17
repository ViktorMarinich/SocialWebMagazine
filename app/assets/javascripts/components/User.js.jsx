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
        user = this.state.user
        return (
          <div>
            <h2>Hello</h2>
            {user.name}
          </div>
        )
      }
  });
