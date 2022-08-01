import { NFTData } from "@lib/models/GeneralModel";

export interface classNameInterface {
  className: string;
}

export const defaultVectorProps: classNameInterface = {
  className: "h-6 w-6",
};

export interface updateProfileInterface {
  walletAddress: string;
  username?: string;
  userBio?: string;
  avatarUrl?: string;
  avatarUrlCompressed?: string;
  avatarUrlThumbnail?: string;
  coverThumbnailUrl?: string;
  coverUrl?: string;
  signature: string;
}

export type TListItem = NFTData | any;

export interface IListView {
  items: TListItem[];
  loading?: boolean;
  showLoadMoreButton?: boolean;
  loadingMore?: boolean;
  loadMore?: React.ReactNode;
  grid?: {
    gutter?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
  };
  renderItem: (item: TListItem) => JSX.Element;
  onLoadMore?: () => void;
}

export interface IListControl {
  hasMore?: boolean;
  infiniteScroll?: boolean;
  showEndMessage?: boolean;
  shouldConvert?: boolean; // Convert the type of the items to NFTModel
  loader?: React.ReactNode;
  endMessage?: React.ReactNode | null;
  converter?: (item) => TListItem;
}

export type IListViewBuilder = IListControl & IListView;
