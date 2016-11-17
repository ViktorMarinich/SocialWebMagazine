var Profile = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li>
            <div>Hello {this.props.foo}!</div>
          </li>
        </ul>
      </div>
    );
  }
});
