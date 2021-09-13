var express = require('express');

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient.create('http://localhost:5001');

var router = express.Router();

/* GET ipfs node status. */
router.get('/status', function(req, res, next) {
    res.send(ipfs.stats);
});

/* GET ipfs content by its hash. */
router.get('/:id', function(req, res, next) {
    res.send(ipfs.cat(id));
});

/* GET ipfs content by its hash. */
router.post('/add', async (req, res) => {
    const data = req.body;

    const fileHash = await addFile(data);

    res.send(`https://ipfs.io/ipfs/${ fileHash }`);
});


const addFile = async ({ path, content }) => {
    const file = { path: path, content: Buffer.from(content) };
    const filesAdded = await ipfs.add(file);
    return filesAdded[0].hash;
}


module.exports = router;
