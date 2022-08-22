"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageresize_1 = __importDefault(require("../imageresize"));
describe('Tests the correct path of the image path function', () => {
    it('Returns the path of the resized image', () => {
        expect(imageresize_1.default.resizePath('daydream.jpg', 1000, 500)).toEqual('resizeImage/daydream.jpg1000x500');
    });
});
