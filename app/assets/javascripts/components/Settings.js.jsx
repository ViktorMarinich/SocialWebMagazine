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
    var name = this.state.editable ? <h4 className="noPaddingNoMargin"><input type='text'  ref='name' defaultValue={this.props.name} /></h4> : <h4 className="noPaddingNoMargin">{this.props.name}</h4>;
    var email = this.state.editable ? <h4 className="noPaddingNoMargin"><input type='text'  ref='email' defaultValue={this.props.email} /></h4> : <h4 className="noPaddingNoMargin">{this.props.email}</h4>;
    return (
      <div className="border padding shadow">
        <div className='profile-text border'>
          Name: {name}
        </div>
        <div className='profile-text border'>
          Email: {email}
        </div>
        {(this.props.current_user.id != this.props.user)? '':<button onClick={this.handleEdit}> {this.state.editable ? 'Save' : 'Edit' } </button>}
      </div>
    )
  }
});
