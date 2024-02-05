export enum ProductStatus {
  NEW = 'new',
  PROMO = 'promo',
  BEST = 'best',
}

export enum ProductVariant {
  OS = 'one-size',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'x-large',
}

export type TProductVariant = {
  price: string;
  variant: ProductVariant;
};
