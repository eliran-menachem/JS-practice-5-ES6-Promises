const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2 * 1000);
  });
}

function setPosts() {
  setTimeout(function() {
      let output = '';
      posts.forEach(function(post){
        output += `<li>${post.title}</li>`;
      })
      document.body.innerHTML = output;
  }, 1 * 1000);
}

const newPost = {
    title:'Post three',
    body: 'This is post three'
}

createPost(newPost)
.then(setPosts)
.catch(function(err){
    console.log(err);
})
