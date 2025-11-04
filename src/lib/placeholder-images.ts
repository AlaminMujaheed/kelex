import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const _dataAny: any = data;

export const PlaceHolderImages: ImagePlaceholder[] =
  Array.isArray(_dataAny)
    ? (_dataAny[0]?.placeholderImages ?? _dataAny)
    : (_dataAny.placeholderImages ?? _dataAny);
