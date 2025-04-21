//Create web server
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

//handle request
router.get('/', commentsController.comment_list);
router.get('/create', commentsController.comment_create_get);
router.post('/create', commentsController.comment_create_post);
router.post('/:id/delete', commentsController.comment_delete_post);