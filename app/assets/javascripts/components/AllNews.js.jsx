var AllNews = React.createClass({
  getInitialState() {
    return { news: [] }
  },
  isUndefiend (el){
   return (typeof el!='undefined')? el  : ""
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
      <div className="news " key={news.id}>
        <div className="news-flex-row border">
          <div className="news-flex-box image-box border ">
            {(typeof news.user.avatar.url!='undefined')? <Link to={`/user/${news.user.id}`}><img  className="border" src={news.user.avatar.url} width='70' height='70'></img></Link>  : ""}
          </div>
          <div className='newsText'>
            <h3 >{news.text}</h3>
              {(typeof news.user.name!='undefined')? <h6 className="noPaddingNoMargin borderTop">Author{news.user.name}</h6>: ""}
          </div>
         </div>
      </div>)
    })
   return (
     <div className="border shadow margin-left">
       <h3 className="align-center">All news</h3>
       {news}
     </div>
     );
  }
});
