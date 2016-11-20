var MyFriends = React.createClass({
  getInitialState() {
    return { friends:[]}
  },
  componentWillMount() {
    $.getJSON(`/users/current.json`, (response) => {
       this.setState({friends: response.friends})
    });},

  render() {
    friends = this.state.friends.map( function (friend) {
      return (
          <div key={friend.id} className='friend-flex'>
            <div className="friends-box " >
              <div className="friend-flex-row border">
                <div className="news-flex-box image-box border ">
                  {(typeof friend.avatar.url!='undefined')? <Link to={`/user/${friend.id}`}><img  className="border" src={friend.avatar.url} width='70' height='70'></img></Link>  : ""}
                </div>
                <h2>{friend.name}</h2>
               </div>
            </div>
          </div>)
    })
    return (
     <div className="border shadow margin-left">{friends}</div>
    );
  }
});
