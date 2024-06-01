export enum CarouselAlignment {
  Vertical = 0,
  Horizontal = 1,
}

export enum AppStoreApi {
  Free = 1,
  Paid = 2,
}

export interface AppStoreFeedItem {
  artistName: string;
  id: string;
  name: string;
  releaseDate: string;
  kind: string;
  artworkUrl100: string;
  url: string;
}

export interface AppStoreFeed {
  items: AppStoreFeedItem[];
  title: string;
}

export interface AppStoreFeedResult {
  feed: { results: AppStoreFeedItem[]; title: string };
}
