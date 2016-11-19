var User = React.createClass({
  getInitialState() {
    return { user: [], friends:[],current_user: this.props.current_user, news: [],img: [] ,wall:[]}
  },
  componentWillReceiveProps(nextProps) {
    $.getJSON(`/users/${nextProps.params.userId}.json`,(response) => {
       this.setState({ user: response })
       this.setState({ friends: response.friends })
       this.setState({ news: response.wall.news})
       this.setState({ img: response.avatar})
       this.setState({ wall: response.wall })});
  },
  componentWillMount(nextProps) {
    $.getJSON(`/users/${this.props.params.userId}.json`, (response) => {
       this.setState({ user: response })
       this.setState({ img: response.avatar})
       this.setState({friends: response.friends})
       this.setState({ news: response.wall.news })});
  },
  handleSubmit(response) {
    var news = this.state.news
    news.push(response)
    this.setState({news: news})
    this.refs.text.value=''
  },
  handleClick() {
    var text = this.refs.text.value;
    console.log(text)
    $.ajax({ url: '/news',
      type: 'POST',
      data: { id: this.state.user.id, news: { text: text, wall_id:  this.state.wall.id } },
      success: (response) => {this.handleSubmit(response);},
      error: (response)=>{console.log(response.responseText)}
    });
  },
  handleUpdateNews(response) {
    var user = response
    this.setState({user: user})
  },
  handleUpdate(user) {
    console.log(user)
    $.ajax({
      url: `/users/${this.state.user.id}`,
      type: 'PATCH',
      data: { id: this.state.user.id, user: user},
      success: (response)=>{this.handleUpdateNews(response);},
    });
  },
  handleAddFriends(response){
    var friends=this.state.friends
    friends.push(response)
    this.setState({friends: friends})
  },
  handleAdd(user) {
    console.log(user)
    $.ajax({
      url: `/friend/add`,
      type: 'POST',
      data: { friend_id: this.state.user.id},
      success: (response)=>{this.handleAddFriends(response);},
      error: (response)=>{console.log(response)}
    });
  },
  handleRemoveFriends(response){
    var friends= this.state.friends.filter(function(friend){return friend.id!=response.user_id})
    this.setState({friends: friends})
  },
  handleRemove(user) {
    console.log(user.target)
    $.ajax({
      url: `/friend/remove`,
      type: 'POST',
      data: { id: this.state.user.id },
      success: (response)=>{this.handleRemoveFriends(response)}});
  },
  render(){
    var user = this.state.user
    var index = 0
    friends = this.state.friends.map(function (friend){
      if (friend.id == current_user.id){
        index = 1 }
      else if(user.id == current_user.id) {
        index = 2
      }
      return <Friendel key={friend.id} url={friend.avatar.url} id={friend.id} name={friend.name}/>
    })
    var add = ( index > 0) ? '':<button onClick={this.handleAdd}>Add to my friends</button>
    var remove= (index  == 1) ? <button onClick={this.handleRemove}>Remove from my friendlist</button> : ''
    var newsSorted = this.state.news.sort(  function(a, b) {
      if (a.id > b.id) { return -1;}
      if (a.id < b.id) { return 1; }
      return 0; })
    news =newsSorted.map( function (news) {
      return <News key={news.id} id={news.user_id} user_name={news.user_name} text={news.text} />
    })
    var avatar = (typeof this.state.user.avatar!='undefined')? <img src={this.state.user.avatar.url} width='200' height='200'></img> : ""
    return(
      <div className="flex-box">
        <div className='menu-item-medium inline-block'>
          <h1>Works or works {current_user.name}</h1>
          <div className='container'>
            <div>{current_user.name}</div>
              <div>{user.email}</div>
            <div>{user.name}</div>
            <div className="friend-img">
              {avatar}
            </div>
            {add}
            {remove}
            <h1>Friends</h1>
              <div className='flex-box'>{friends}</div>
          </div>
        </div>
        <div className="menu-item-medium inline-block">
          <div>Profile Info</div>
          <div>
            <div>
              <Settings key={user.id} name={user.name} email={user.email} handleUpdate={this.handleUpdate}/>
            </div>
          </div>
          <div>News</div>
            <div>
              <input ref='text' placeholder='Type yours comment' />
              <button onClick={this.handleClick}>Submit</button>
            </div>
            <div >
              {news}
            </div>
        </div>
      </div>
    );
  }
});
