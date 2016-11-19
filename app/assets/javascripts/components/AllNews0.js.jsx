var Image = React.createClass({
  render() {

   return (
     <div>
       <img src={this.props.url}></img>
       <h1>{this.props.name}</h1>
     </div>
     );
  }
});
