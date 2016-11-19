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
       <div key={news.id}>
         <h4>Author: {news.user.name}</h4>
         <h5>{news.text}</h5>
       </div>)
    })
   return (
     <div>{news}</div>
     );
  }
});
