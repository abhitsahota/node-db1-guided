const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    try {
        const { id } = req.params
        const result = await knex('posts')
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'problem with db', error: err })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await knex('posts').where({ id })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'problem with db', error: err })
    }
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;