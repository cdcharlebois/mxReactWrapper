var Comment = React.createClass({
    displayName: 'Comment',
    render: function() {
        return (
            <div>
              <h2>{this.props.author}</h2>
              {this.props.text}
            </div>
        );
    }
});
var CommentList = React.createClass({
    displayName: 'CommentList',
    comments: function() {
        return this.props.comments.map(function(c) {
            return (
              <Comment author={c.author} text={c.text} key={c.number} />
            )
        })
    },
    render: function() {
        return (
            React.createElement('div', null, this.comments())
        )
    }
});
var CommentForm = React.createClass({
    displayName: 'CommentForm',
    getInitialState: function() {
        return {
            author: '',
            text: ''
        };
    },
    handleAuthorChange: function(e) {
        this.setState({
            author: e.target.value
        });
    },
    handleTextChange: function(e) {
        this.setState({
            text: e.target.value
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({
            author: author,
            text: text
        });
        this.setState({
            author: '',
            text: ''
        });
        console.log('starting mf')
        mx.ui.action('TestSuite.IVK_test');
    },
    render: function() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
              <input type="text" value={this.state.text} onChange={this.handleTextChange} />
              <input type="submit" value="post" />
            </form>
          </div>
        )
    }
});
var CommentBox = React.createClass({
    displayName: 'CommentBox',
    getInitialState: function() {
        return {
            data: [{
                number: 1,
                author: 'Conner',
                text: 'some comment'
            }, {
                number: 2,
                author: 'Joe',
                text: 'some other comment'
            }]
        };
    },
    handleCommentSubmit: function(newComment) {
        newComment.number = Math.random() * 10000
        var comments = this.state.data;
        comments.push(newComment)
        this.setState(comments)
    },
    render: function() {
        return (
          <div>
            <h1>Comments</h1>
            <CommentList comments={this.state.data} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          </div>
        );
    }
});
