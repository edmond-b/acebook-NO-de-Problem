'use strict';
// import Post from './postComponent';

class PostListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.fetchData('/newsfeed/posts');
  }

  fetchData = (apiToFetch) => {
    fetch(apiToFetch)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          posts: data
        });
      });
  }

  getPostsSortedByNewest() {
    return this.state.posts.sort(function(postA, postB) {
      var dateA = new Date(postA.datePosted);
      var dateB = new Date(postB.datePosted);
      return dateB - dateA;
    });
  }

  updateState = (msg) => {
    var newelement = {body: msg};
    this.setState({
      posts: this.state.posts.concat([newelement])
    });
  }

  render() {
    return (
      <div id="posts">
        <FormComponent updatemethod={this.updateState} />
        <ul>
            {this.getPostsSortedByNewest().map((post) => {   //javascript
              return (							 //javascript
                <li key={post.id}>
                  <Post data={post}/>
                </li>
                );
              }
            )}
        </ul>
      </div>
    );
  }
}
