const posts = [];
let lastActivityTime = null;

function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve(post);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const deletedPost = posts.pop();
      resolve(deletedPost);
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

Promise.all([createPost({ title: "Post 1" }), updateLastUserActivityTime()]);
Promise.all([createPost({ title: "Post 2" }), updateLastUserActivityTime()]);
Promise.all([createPost({ title: "Post 3" }), updateLastUserActivityTime()])
  .then(([createdPost, activityTime]) => {
    console.log("All posts:", posts);
    console.log("Last Activity Time:", activityTime);
  })
  .then(() => deletePost())
  .then(() => {
    console.log("Remaining posts after deletion:", posts);
  });
