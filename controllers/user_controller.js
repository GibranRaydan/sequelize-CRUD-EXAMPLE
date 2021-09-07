const models = require('../database/models');
const Rectangle = require('../classes_example.js');
const crypto = require('crypto')

let salt = 'f844b09ff50c'

const registerUser = async (req, res) => {
    try {
        const userData = req.body;

        let hash = crypto.pbkdf2Sync(userData.password, salt,
            1000, 64, `sha512`).toString(`hex`);
        userData.password = hash;

        const post = await models.User.create(userData);
        return res.status(201).json({
            post,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const login = async (req, res) => {
    try {
        const userData = req.body;

        const user = await models.User.findOne({
            where: {
                email: userData.email,
                password: crypto.pbkdf2Sync(req.body.password, salt,
                    1000, 64, `sha512`).toString(`hex`)
            },
        });

        if (user != null) {
            const payload = {
                username: user.email,
                password: user.password
            };

            return res.status(200).json({
                payload
            });
        };

        return res.status(401).json({error: 'bad-credentials'});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    registerUser,
    login
}