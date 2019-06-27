const express = require('express');
const router = express.Router();
const users = require('../models').users
const posts = require('../models').posts

router.get('/', function (req, res, next) {
    posts.findAll({ 
        include: users, 
        order: [
            ['createdAt', 'DESC']
        ] 
    })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.sendStatus(500).json({
                message: err,
            })
        })
})

router.get('/:id', (req, res, next) => {
    posts.findOne({
        where: { id: req.params.id }
    }, { include: ['users'] })
        .then(data => {
            if (data !== undefined) {
                res.status(200).json(data.dataValues)
            } else {
                res.status(400).json({
                    message: `post with id: ${req.params.id} not found`,
                    status: 400
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: `internal server error`,
                status: 500
            })
        })
})

router.post('/', (req, res, next) => {

    let body = {
        post: req.body.post,
        user_id: req.body.user_id
    }
    if (!body.post || !body.user_id) {
        res.status(400).json({
            message: "Bad Request"
        })
    } else {
        posts.create(body)
            .then(data => {
                res.status(201).json(data.dataValues)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    message: `internal server error`,
                    status: 500
                })
            })
    }
})

router.put('/:id', (req, res, next) => {
    let body = {

        post: req.body.post,

    }

    posts.update(body, {
        where: { id: req.params.id, user_id: req.users.id }
    })
        .then(data => {
            if (data[0]) {
                posts.findOne({ where: { id: req.params.id } })
                    .then(data => { res.status(200).json(data) })
                    .catch(err => res.status(500).json({ message: "Internat Server Error !!", status: 500 }))
            } else {
                res.status(403).json({
                    message: 'unathorized request',
                    status: 403
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'server error',
                status: 500
            })
        })
})

router.delete('/:id', (req,res,next) => {
    posts.destroy({where: {
        id: req.params.id,
        user_id: req.users.id
    }}).then(deletedPost => {
        res.status(200).json({
            message: `success deleted post : ${deletedPost} with id: ${req.users.id}`,
            status: 200
        })
    })
    .catch(err => {
        console.log(err)
        res.status(403).json({
            message: 'unathorized request',
            status: 403
        })
    })
})

module.exports = router;