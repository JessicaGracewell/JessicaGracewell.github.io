var posts=["posts/6766b576.html","posts/1611c0f4.html","posts/2d58b7db.html","posts/6fc8eab5.html","posts/782a8ece.html","posts/b5b10a59.html","posts/e6fd4366.html","posts/5f20dbc.html","posts/ac61edc7.html","posts/400e1917.html","posts/18e92b22.html","posts/6e78f5b3.html","posts/bfccf79c.html","posts/f6151073.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};