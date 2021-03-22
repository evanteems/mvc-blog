const { Post } = require('../models');

const postData = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_text: 'Nam faucibus, magna vel elementum maximus, magna tellus tincidunt arcu, eu semper justo augue est.',
        user_id: 10
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum',
        post_text: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros',
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        post_text: 'Quisque nisi ante, auctor sed ex quis, consectetur tempor lacus.',
        user_id: 1
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
    {
        title: ,
        post_text: ,
        user_id:
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;