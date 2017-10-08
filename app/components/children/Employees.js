var DisplayData = React.createClass({
    render(){
        var posts = this.props.posts || [];

        var renderPosts = posts.map(function(post, index) {
            return (
              <li key={index}>{post}</li>
            ); 
        });

        return (
          <div>
            <p> Your collection </p>
            <ul>
              {renderPosts}
            </ul>
          </div>
        );
    }
}); 
