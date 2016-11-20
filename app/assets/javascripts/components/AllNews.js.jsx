var AllNews = React.createClass({
  getInitialState() {
    return { news: [] }
  },
  componentWillMount(){
    $.getJSON('/news.json', (response) => { this.setState({ news: response }) });
  },
  render() {
    newsSorted=this.state.news.sort(  function(a, b) {
      if (a.id > b.id) { return -1;}
      if (a.id < b.id) { return 1; }
      return 0; })
    news = newsSorted.map(function(news){
      return (
        <div className="news ">
          <div className="news-flex-row border">
            <div className="news-flex-box image-box border ">
                <img className="border" src={this.is_undefiend (this.news.url)} width='50' height='50'></img>
                <Link to={`/user/${this.is_undefiend (this.news.id)}`} >
                  <h5 className="noPaddingNoMargin "> {this.is_undefiend (this.news.name)}</h5></Link>
            </div>
            <div className='newsText'>
              <h3 className="noPaddingNoMargin">{this.news.text}</h3>
            </div>
           </div>
        </div>)
    })
   return (
     <div>{news}</div>
     );
  }
});
