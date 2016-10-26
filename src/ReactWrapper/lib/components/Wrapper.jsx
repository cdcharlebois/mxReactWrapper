var Wrapper = React.createClass({
  render: function(){
    return(
      <div>
        <Test />
        <CommentBox />
      </div>
    )
  }
});


ReactDOM.render(
  <Wrapper/>,
  document.getElementById('anchor')
)
