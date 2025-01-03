import theme from "@theme";

export type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';
export type FontFamily = keyof typeof theme.font_family;
export type LineHeight = keyof typeof theme.line_height;
export type Sizes = keyof typeof theme.font_size.body;

export type FontSizeTitle = 
    | 'title_xs'
    | 'title_sm'
    | 'title_md'
    | 'title_lg'

export type FontSizeBody = 
    | 'body_xs'
    | 'body_sm'
    | 'body_md'
    | 'body_lg'

export type FontSizes = FontSizeTitle | FontSizeBody;
export type TypeColors = keyof typeof theme.colors;
export type BaseColors = keyof typeof theme.colors.base;
export type BrandColors = keyof typeof theme.colors.brand;
export type Colors = BaseColors | BrandColors;