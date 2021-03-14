const express = require('express');
const router = express.Router();
const mongo = require('mongodb');

router.route('/')
  .get(async (req, res, next) => {
    const skip = +req.query.skip || 0;
    const limit = +req.query.limit || 0;
    const thePosts = await global.posts
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();

    res.send(thePosts);
  })
  .post(require('../blockUnauthorizedPosts.js'), async (req, res, next) => {
    const post = {
      title: req.body.title,
      body: req.body.body,
      date: new Date(),
      author: req.user || "you"
    };

    await global.posts.insertOne(post);

    res.status(201).send(post);
    //socketIo.emit('post');
  });

router.post('/:id/comments',require('../blockUnauthorizedPosts.js'), async (req, res, next) => {
  const newComment = {
    body: req.body.body,
    author: req.user,
    date: new Date()
  };

  await global.posts.updateOne(
    { _id: mongo.ObjectId(req.params.id) },
    {
      $push: {
        comments: newComment
      }
    }
  );

  global.socketIo.emit('comment', { postId: req.params.id, comment: newComment });

  res.status(201)
    //.location()
    .send(newComment);
});

module.exports = router;