var NewsItem = React.createClass({
  is_undefiend (el){
   return (typeof el!='undefined')? el  : ""
  },
  render: function() {
    return (
      <div className="news ">
        <div className="news-flex-row border">
          <div className="news-flex-box image-box border ">
              <Link to={`/user/${this.is_undefiend (this.props.id)}`} >
                <img className="border" src={this.is_undefiend (this.props.url)} width='50' height='50'></img>
                <h5 className="noPaddingNoMargin "> {this.is_undefiend (this.props.name)}</h5></Link>
          </div>
          <div className='newsText'>
            <h3 className="noPaddingNoMargin">{this.props.text}</h3>
          </div>
         </div>
      </div>
    );
  }
});
