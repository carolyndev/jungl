export type TItem = any;

export type TItemsResponse = {
  items: TItem[];
  total: number;
};
export type TItemsRequestParams = {
  search: string;
}
