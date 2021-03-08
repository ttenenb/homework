const express = require('express');
const router = express.Router();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

let posts;
(async () => {
  await client.connect();
  const db = client.db('blogs');
  posts = db.collection('posts');
})().catch(err => console.error(err));

router.route('/')
    .get(async (req, res, next) => {
    const thePosts = await posts.find().toArray();
    res.render('layout', {
      subtitle: 'Blog Posts',
      links: [{ url: '/addPost', name: 'add post' }],
      posts: thePosts, 
      partials: { content: 'posts' }
    });
    })
    .post((req, res, next) => {
        posts.updateOne({ _id:  mongo.ObjectId(req.body.id) }, { $push: { comments: req.body.comment } });
        res.sendStatus(201);
    })

router.route('/addPost')
    .get((req, res, next) => {
      res.render('layout', {
        subtitle: 'Add Post',
        links: [{ url: '/', name: 'home' }],
        partials: { content: 'addPost' }
      });
    })
    .post(async (req, res, next) => {
      const post = {
        title: req.body.title,
        body: req.body.body,
        date: new Date(),
        author: 'me'
      };
  
      await posts.insertOne(post);
      res.status('/');
    });

    module.exports = router;
