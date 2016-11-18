var User = React.createClass({
  getInitialState() {
    return { user: [], current_user: [], friends:[], news: [] } },
    componentWillReceiveProps(nextProps) {
      console.log(nextProps.params)
      console.log(this.props.params)
      console.log(this.props.params.userId)
      $.getJSON(`/users/${nextProps.params.userId}.json`, (response) => {
         this.setState({ user: response })
         this.setState({ friends: response.friends })
         this.setState({ news: response.wall.news })
       });


    },

    componentWillMount(nextProps) {
      $.getJSON(`/users/${this.props.params.userId}.json`, (response) => {
         this.setState({ user: response })
         this.setState({friends: response.friends})
         this.setState({ news: response.wall.news })
       });
      $.getJSON(`/users/1.json`, (response) => {
        this.setState({ current_user: response })
    });
      //  this.setState({user: this.props.params.userId})


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
                   <div>News</div>
                   <div >{news}</div>
                 <div className="friend-img">
                   <img src="/uploads/user/avatar/203/1.jpg" width='200' height='200'></img>
                 </div>
                   <Link to={`/user/209` }>209</Link>
                 <Link to={`/user/202` }>202</Link>
                 <h1>Friends</h1>
                   <div className='flex-box'>{friends}</div>
               </div>
             </div>
             <div className="menu-item-medium inline-block">

               </div>
             </div>
           );
      }
  });
