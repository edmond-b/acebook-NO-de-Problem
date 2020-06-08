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

  updateState = (body) => {
    // sending the body over to server > route > controller
    // when it arrives at controller > Model > DB
    console.log("update state method")
    var data = {body: body};
    // const data = new FormData()
    // data.append('file', this.state.selectedFile);
    axios
      .post('/newsfeed', data)
      .then(res => {
         console.log(res)})
      .then(console.log("yo"))
      .catch(err => console.log(err));
    // this.setState({
    //   posts: this.state.posts.concat([newelement])
    // });
  };

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
