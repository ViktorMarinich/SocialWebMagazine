var User = React.createClass({
  getInitialState() {
    return { user: [], current_user: [], friends:[], news: [] ,wall:[]}
  },
  componentWillReceiveProps(nextProps) {
    $.getJSON(`/users/${nextProps.params.userId}.json`,(response) => {
       this.setState({ user: response })
       this.setState({ friends: response.friends })
       this.setState({ news: response.wall.news.reverse()})
       this.setState({ wall: response.wall })
     });
  },
  componentWillMount(nextProps) {
    $.getJSON(`/users/${this.props.params.userId}.json`, (response) => {
       this.setState({ user: response })
       this.setState({friends: response.friends})
       this.setState({ news: response.wall.news.reverse() })
    });
    $.getJSON(`/users/100.json`, (response) => {
      this.setState({ current_user: response })
    });
  },
  handleSubmit( news) {
    $.getJSON(`/users/${this.props.params.userId}.json`, (response) => {
       this.setState({ news: response.wall.news.reverse() })
       this.refs.text.value=''
    });
  },
  handleClick() {
    var text = this.refs.text.value;
    console.log(text)
    $.ajax({ url: '/news',
      type: 'POST',
      data: { id: this.state.user.id,
      news: { text: text, user_id: this.state.current_user.id ,
      wall_id:  this.state.wall.id } },
      success: (response) => {
        console.log(response)
      this.handleSubmit(response);
      },
      error: (response)=>{
        console.log(response.responseText)
      }
    });
  },
  handleUpdateNews(response) {
      var user = response
      this.setState({user: user})
      if (user.id == current_user.id) {
        this.setState({current_user: user})
      }
  },
    handleUpdate(user) {
      console.log(user)
        $.ajax({
                url: `/users/${this.state.user.id}`,
                type: 'PATCH',
                data: { id: this.state.user.id, user: user
                },
                success: (response)=>{
                  console.log(response)
                this.handleUpdateNews(response);
                },
                error: (response)=>{
                  console.log(response.responseText)
                }
            });
      },
  render() {
    current_user= this.state.current_user
    user = this.state.user
    friends = this.state.friends.map( function (friend) {
      return <Friendel key={friend.id} id={friend.id} name={friend.name}/>
    })
    news = this.state.news.map( function (news) {
      return <News key={news.id} id={news.user_id} user_name={news.user_name} text={news.text} />
    })

    return  (
      <div className="flex-box">
        <div className='menu-item-medium inline-block'>
          <div className='container'>
            <div>{current_user.name}</div>
              <div>{user.email}</div>
            <div>{user.name}</div>
            <div className="friend-img">
              <img src="/uploads/user/avatar/203/1.jpg" width='200' height='200'></img>
            </div>
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
