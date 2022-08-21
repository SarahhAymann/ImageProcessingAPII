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
const imageresize_1 = __importDefault(require("../imageresize"));
describe('Tests the correct path of the image path function', () => {
    it('Returns the path of the resized image', () => {
        expect(imageresize_1.default.resizePath('daydream.jpg', 1000, 500)).toEqual('resizeImage/daydream.jpg1000x500');
    });
});
describe('Test the resize function', () => {
    it('Returns an err if an input is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(imageresize_1.default.resizeImage('day.jpg', 200, 300)).toThrowError('Input file is wrong');
    }));
});
