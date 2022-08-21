import resizer from '../imageresize';

describe('Tests the correct path of the image path function', () => {
    it('Returns the path of the resized image', () => {
        expect(resizer.resizePath('daydream.jpg', 1000, 500)).toEqual(
            'resizeImage/daydream.jpg1000x500'
        );
    });
});
