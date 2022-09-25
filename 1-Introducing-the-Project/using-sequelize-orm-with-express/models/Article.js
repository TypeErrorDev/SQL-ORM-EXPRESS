// 'use strict';
// const Sequelize = require('sequelize');
//
// module.exports = (sequelize) => {
//   class Article extends Sequelize.Model {
//   }
//
//   Article.init({
//     title: Sequelize.STRING,
//     author: Sequelize.STRING,
//     body: Sequelize.TEXT
//   }, {sequelize});
//   return Article;
// }
 const express = require('express');
  const router = express.Router();
  const Article = require('../models').Article;

  function asyncHandler (cb) {
    return async (req, res, next) => {
      try {
        await cb(req, res, next)
      } catch (error) {
        res.status(500).send(error);
      }
    }
  }

  router.get('/', asyncHandler(async (req, res) => {
    res.render("articles/index", {articles: {}, title: "Sequelize-It!"});
  }));