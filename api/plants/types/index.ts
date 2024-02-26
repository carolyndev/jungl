import { ProductStatus, TProductVariant } from '@api/products/types';

export type TPlantId = string;

export type TPlant = {
  _id: TPlantId;
  botanicalName: string;
  name: string;
  status: ProductStatus;
  tags: string[];
  url: string;
  variations: TProductVariant;
};

export type TPlantsResponse = {
  plants: TPlant[];
  total: number;
};
export type TPlantsRequestParams = {
  search: string;
}
