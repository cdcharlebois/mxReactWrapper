var Wrapper = React.createClass({
  render: function(){
    return(
      <div>
        Hello from React
        {/* <Test /> */}
        {/* <CommentBox /> */}
      </div>
    )
  }
});

ReactDOM.render(
  <Wrapper/>,
  document.getElementById('anchor')
)
