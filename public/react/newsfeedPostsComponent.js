'use strict';
// import Post from './postComponent';

class NewsfeedPostsComponent extends React.Component {
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
        // organise data by date
        data.sort(function(postA, postB) {
          var dateA = new Date(postA.datePosted);
          var dateB = new Date(postB.datePosted);
          return dateB - dateA;
        });
        this.setState({
          posts: data
        });
      });
  }

  render() {
    const {posts} = this.state;
    return (
      <div id="posts">
        <ul>
            {posts.map((post) => {   //javascript
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

ReactDOM.render(<NewsfeedPostsComponent />, document.body);
