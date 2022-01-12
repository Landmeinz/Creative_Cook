const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;

/**
 * POST upload of a bulk .csv data containing pairings by id 
 */
router.post('/', upload.single('file'), (req, res) => {
    // console.log('in bulk pairings post with file: ', req.file);

    pool.connect(function (err, client, done) {
        let stream = client.query(copyFrom(`
        COPY pairings (ingredient_one_id, ingredient_two_id) FROM STDIN DELIMITER ',' CSV HEADER;
        `));
        let fileStream = fs.createReadStream(req.file.path);
        stream.on('finish', function (err, result) {
            if(err) {
                // console.log('this is a stream error:', err);
            } else {
                // console.log('upload successful');
                res.sendStatus(200);
            }
        });
        fileStream.pipe(stream);
    })
    
})

module.exports = router;