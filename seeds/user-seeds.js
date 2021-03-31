const sequelize = require('../config/connections');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'evanteems',
        password: 'passcode123'
    },
    {
        username: 'ryugenyasuo',
        password: 'passcode123'
    },
    {
        username: 'devinshimane',
        password: 'passcode123'
    },
    {
        username: 'colenorcio',
        password: 'passcode123'
    },
    {
        username: 'robertwyatt',
        password: 'passcode123'
    },
    {
        username: 'evannouchi',
        password: 'passcode123'
    },
    {
        username: 'kylelopez',
        password: 'passcode123'
    },
    {
        username: 'helenperez',
        password: 'passcode123'
    },
    {
        username: 'madisonbull',
        password: 'passcode123'
    },
    {
        username: 'juliele',
        password: 'passcode123'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;