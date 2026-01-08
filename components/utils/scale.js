import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const BASE_WIDTH = 360;
const BASE_HEIGHT = 800;

export const scale = (size) => (width / BASE_WIDTH) * size;

export const verticalScale = (size) => (height / BASE_HEIGHT) * size;

export const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

export const scaleFont = (size) => {
    const fontScale = PixelRatio.getFontScale();
    const limitedFontScale = Math.min(Math.max(fontScale, 0.85), 1.15);
    const scaledSize = moderateScale(size) / limitedFontScale;
    return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
};
