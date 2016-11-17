var User = React.createClass({
  getInitialState() {
    return { user: [] } },

    componentWillMount(nextProps) {
        console.log(this.props.params.userId)


   },
      render() {
        return (
          <div>
            <h2>Hello</h2>
            {/* etc. */}
          </div>
        )
      }
  });
