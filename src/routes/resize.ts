import fs from 'fs';
import express from 'express';
import resizer from '../imageresize';

const resize = express.Router();

resize.get('/', async (req, res) => {
    const fileName: string = req.query.filename as string;
    const Width: number = parseInt(req.query.width as unknown as string);
    const Height: number = parseInt(req.query.height as unknown as string);
    const newImageSize: string = resizer.resizePath(fileName, Width, Height);
    if (!fs.existsSync(newImageSize)) {
        await resizer.resizeImage(fileName, Width, Height);
    }
    fs.readFile(newImageSize, function (err, data) {
        if (err) res.end('Failed to Process your request');
        res.writeHead(200);
        res.end(data, 'binary');
    });
});

export default resize;
