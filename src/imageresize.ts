import sharp from 'sharp';
import path from 'path';

const resizeImage = async (
    filename: string,
    width: number,
    height: number
): Promise<void> => {
    try {
        await sharp(path.resolve(`images/${filename}`))
            .resize({
                width,
                height
            })
            .jpeg()
            .toFile(`resizeImage/${filename}${width}x${height}`);
    } catch (error) {
        console.log(error);
    }
};

const resizePath = (
    filename: string,
    width: number,
    height: number
): string => {
    const pathImage: string =
        `resizeImage/${filename}${width}x${height}` as string;
    return pathImage;
};

export default { resizePath, resizeImage };
