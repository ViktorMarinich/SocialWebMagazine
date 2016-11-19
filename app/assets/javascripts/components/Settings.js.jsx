var Settings = React.createClass({
  getInitialState() {
      return {editable: false}
  },
  handleEdit() {
    if(this.state.editable) {
        var name = this.refs.name.value;
        var email = this.refs.email.value;
        var user = { name: name , email: email};
        this.props.handleUpdate(user);
    }
    this.setState({ editable: !this.state.editable })
  },
  render() {
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.name} /> : <h3>{this.props.name}</h3>;
    var email = this.state.editable ? <input type='text' ref='email' defaultValue={this.props.email} /> : <h3>{this.props.email}</h3>;
    return (
      <div>
        {name}
        {email}
        <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
      </div>
    )
  }
});
