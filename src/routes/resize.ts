import fs from 'fs';
import express from 'express';
import resizer from '../imageresize';
import { promises as fsPromises } from 'fs';

const resize = express.Router();

resize.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        const fileName: string = req.query.filename as string;
        const Width: number = parseInt(req.query.width as unknown as string);
        const Height: number = parseInt(req.query.height as unknown as string);
        const images = await fsPromises.readdir(`images`);
        const dir = images.find((file) => file === fileName);
        if (!dir) {
            res.status(400).json({
                message: 'Wrong file name  '
            });
            return;
        }

        if (!fileName) {
            res.status(400).json({
                message: 'Mandatory field: name is missing. '
            });
            return;
        }
        if (!Width || !Height) {
            res.status(400).json({
                message:
                    'Mandatory field: Dimisnions are missing or incorrect. '
            });
            return;
        }
        const newImageSize: string = resizer.resizePath(
            fileName,
            Width,
            Height
        );
        if (!fs.existsSync(newImageSize)) {
            await resizer.resizeImage(fileName, Width, Height);
        }
        fs.readFile(newImageSize, function (err, data) {
            res.writeHead(200);
            res.end(data, 'binary');
        });
    }
);

export default resize;
