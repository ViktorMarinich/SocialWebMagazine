var User = React.createClass({
  getInitialState() {
    return { user: [], friends:[],errors:[],current_user: this.props.current_user, news: [],img: [] ,wall:[]}
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
    $.getJSON(`/users/${this.props.params.userId}.json`, (response) => {
       this.setState({ news: response.wall.news })})
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
    $.getJSON(`/users/${this.props.params.userId}.json`, (response) => {
      this.setState({ user: response })
      this.setState({ news: response.wall.news })})
  },
  handleUpdate(user) {
    console.log(user.avatar)
    $.ajax({
      url: `/users/${this.state.user.id}`,
      type: 'PATCH',
      data: { id: this.state.user.id, user: user},
      success: (response)=>{
        this.handleUpdateNews(response);
      },
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
  is_undefiend (el){
   return (typeof el!='undefined')? el  : ""
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
    var index = (user.id == current_user.id)? 2 : 0
    friends = this.state.friends.map(function (friend,i){
      if (friend.id == current_user.id){
        index = 1 }
      else if(user.id == current_user.id) {
        index = 2
      }
      if(i<8){
      return <Friendel key={friend.id} url={friend.avatar.url} id={friend.id} name={friend.name}/>
    }})
    var add = ( index > 0) ? '':<button onClick={this.handleAdd}>Add to my friendlist</button>
    var remove= (index  == 1) ? <button onClick={this.handleRemove}>Remove from my friendlist</button> : ''
    var newsSorted = this.state.news.sort(  function(a, b) {
      if (a.id > b.id) { return -1;}
      if (a.id < b.id) { return 1; }
      return 0; })
    news =newsSorted.map( function (news) {
      return  <NewsItem key={news.id} id={news.user.id} name={news.user.name} text={news.text} url={news.user.avatar.url} />

    })
    var avatar = (typeof this.state.user.avatar!='undefined')? <img src={this.state.user.avatar.url} width='200' height='200'></img> : ""
    return(
      <div className="flex-box">
        <div className='menu-item-medium border shadow inline-block'>
          <div className='container'>
            <div>{user.name}</div>
            <div >
              <div className="friend-img shadow">
                {avatar}
              </div>
            </div>
            <div className="friend-request ">
              <p className='align-center'>{add}
              {remove}</p>
            </div >
            <h1>Friends</h1>
              <div className='flex-box border'>{friends}</div>
          </div>
        </div>
        <div className="menu-item-medium border shadow inline-block shadow">
          <h3 className='align-center'>Profile Info</h3>
          <div>
            <div>
              <Settings key={user.id} name={user.name} current_user={this.props.current_user} user={user.id} email={user.email} handleUpdate={this.handleUpdate}/>
            </div>
          </div>
          <div>
          </div>
          <h3 className='align-center'>Wall</h3>
            <div className="flex-row-sing new-news shadow border">
              <div className='padding'>
                <textarea ref='text' placeholder='Type yours comment' cols='32' rows='2'/>
                <div>
                  <button onClick={this.handleClick}>Send</button>
                </div>
              </div>
            </div>
            <div className='border shadow'>
              {news}
            </div>
        </div>
      </div>
    );
  }
});
