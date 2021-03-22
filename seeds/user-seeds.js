const sequelize = require('../config/connections');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'evanteems',
        email: 'evanteems@yahoo.com',
        password: 'passcode123'
    },
    {
        username: 'ryugenyasuo',
        email: 'ryugeny@yahoo.com',
        password: 'passcode123'
    },
    {
        username: 'devinshimane',
        email: 'devinshimane@gmail.com',
        password: 'passcode123'
    },
    {
        username: 'colenorcio',
        email: 'colenorcio@msn.com',
        password: 'passcode123'
    },
    {
        username: 'robertwyatt',
        email: 'robertwyatt@gmail.com',
        password: 'passcode123'
    },
    {
        username: 'evannouchi',
        email: 'evannouchi@yahoo.com',
        password: 'passcode123'
    },
    {
        username: 'kylelopez',
        email: 'kylelopez@msn.com',
        password: 'passcode123'
    },
    {
        username: 'helenperez',
        email: 'hperez@gmail.com',
        password: 'passcode123'
    },
    {
        username: 'madisonbull',
        email: 'bmadison@yahoo.com',
        password: 'passcode123'
    },
    {
        username: 'juliele',
        email: 'juliele@china.com.cn',
        password: 'passcode123'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;