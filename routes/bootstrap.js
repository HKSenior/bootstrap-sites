var express = require('express');
var router = express.Router();

router.get('/pure-bootstrap', function(req, res, next) {
    res.sendFile('sites/pure-bootstrap/index.html');
});

router.get('/pure-bootstrap', function(req, res, next) {
    res.sendFile('sites/admin/index.html');
});

router.get('/pure-bootstrap', function(req, res, next) {
    res.sendFile('sites/photo-x/index.html');
});

module.exports = router;