var Friend = React.createClass({
    render: function() {
        return (
            <li className="contact">
                <div className="contact-info">
                  <h1>{current_user.name}</h1>
                    <div className="contact-name"> {this.props.name} </div>
                    <div className="contact-number"> {this.props.id} </div>
                </div>
            </li>
        );
    }
});
