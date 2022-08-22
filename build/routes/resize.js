"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const imageresize_1 = __importDefault(require("../imageresize"));
const fs_2 = require("fs");
const resize = express_1.default.Router();
resize.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = req.query.filename;
    const Width = parseInt(req.query.width);
    const Height = parseInt(req.query.height);
    const images = yield fs_2.promises.readdir(`images`);
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
            message: 'Mandatory field: Dimisnions are missing or incorrect. '
        });
        return;
    }
    const newImageSize = imageresize_1.default.resizePath(fileName, Width, Height);
    if (!fs_1.default.existsSync(newImageSize)) {
        yield imageresize_1.default.resizeImage(fileName, Width, Height);
    }
    fs_1.default.readFile(newImageSize, function (err, data) {
        res.writeHead(200);
        res.end(data, 'binary');
    });
}));
exports.default = resize;
