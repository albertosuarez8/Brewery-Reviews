const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newpost', async (req, res) => {
    try {
        res.render('newpost');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newpost/createpost/:sport/stadium/section', async (req, res) => {
    try {
        let postDetail = {}
        res.render('createpost', {
            postDetail: postDetail
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;