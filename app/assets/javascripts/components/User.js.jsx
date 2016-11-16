var User = React.createClass({
    getInitialState() {
      return {
        user: this.props.user
      }
    },

    render() {
      return (
        <tr>
          <td>{this.state.user.name}</td>
          <td>{this.state.user.email}</td>
        </tr>
      );
    }
  });
