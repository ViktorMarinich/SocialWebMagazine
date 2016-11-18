var AddNews = React.createClass({
  handleClick() {
     var text = this.refs.text.value;
     console.log(text)
     $.ajax({ url: '/news',
       type: 'POST',
       data: { id: user_id,news: { text: name, description: description } },
       success: (item) => {
         console.log(news)
         this.props.handleSubmit(item);
       } });
      },
        render() {
          return (
            <div>
            <input ref='text' placeholder='Type yours comment' />
            <button onClick={this.handleClick}>Submit</button>
           </div> ) }
});
