import React, { FC, memo } from "react";
import { IListView, IListViewBuilder } from "@lib/@Types";
import { NftModelToCardData } from "@lib/models/GeneralModel";
import useMediaQuery from "@components/hooks/useMediaQuery";
import { List } from "antd";
import { LoadMore } from "@components/modules/__modules__/Card/LoadMore";
import SkeletonLoader from "@components/modules/__modules__/Card/SkeletonLoader";
import NFTCardFallback from "../NFTCardFallback";
import LoadNftsFallback from "./LoadNftsFallback";

export const ListView: FC<IListView> = ({
  loading,
  loadingMore,
  loadMore,
  grid,
  items,
  showLoadMoreButton,
  renderItem,
  onLoadMore,
}: IListView) => {
  const [isMobile] = useMediaQuery("(max-width: 520px)");
  const [isLarge] = useMediaQuery(
    "(min-width: 1024px) and (max-width: 1200px)"
  );
  const [isExtraLarge] = useMediaQuery("(min-width: 1200px)");

  const preloaderLimit = () => {
    if (isMobile) return 1;
    if (isLarge) return 3;
    if (isExtraLarge) return 4;
    return 3;
  };

  return (
    <div className="items-center">
      <List
        loading={{
          indicator: <LoadNftsFallback />,
          spinning: loading,
        }}
        loadMore={
          loadMore || (
            <div className={!loadingMore ? "flex justify-center" : ""}>
              {(!loadingMore && (
                <LoadMore
                  onLoadMore={onLoadMore!}
                  showLoadMore={showLoadMoreButton!}
                  size={items && items.length}
                />
              )) || (
                <List
                  grid={grid}
                  dataSource={items.slice(0, preloaderLimit())}
                  renderItem={() => (
                    <List.Item>
                      <NFTCardFallback />
                    </List.Item>
                  )}
                />
              )}
            </div>
          )
        }
        grid={grid}
        dataSource={items}
        renderItem={(item) => {
          return renderItem(item);
        }}
      />
    </div>
  );
};

const ListViewBuilder: FC<IListViewBuilder> = ({
  loadMore,
  loading,
  items,
  grid,
  loadingMore,
  showLoadMoreButton,
  onLoadMore,
  renderItem,
}: IListViewBuilder) => {
  return (
    <>
      <ListView
        items={items}
        loadMore={loadMore}
        loading={loading}
        grid={grid}
        showLoadMoreButton={showLoadMoreButton}
        loadingMore={loadingMore}
        renderItem={renderItem}
        onLoadMore={onLoadMore}
      />
    </>
  );
};

const listViewDefaults: Partial<IListView> = {
  loadMore: null,
  loading: false,
  loadingMore: false,
  showLoadMoreButton: true,
  grid: {
    gutter: 22,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 4,
  },
};

const defaultProps: Partial<IListViewBuilder> = {
  loadMore: null,
  loading: false,
  showEndMessage: true,
  infiniteScroll: true,
  shouldConvert: false,
  converter: NftModelToCardData,
  ...listViewDefaults,
};

ListViewBuilder.defaultProps = defaultProps;

ListView.defaultProps = listViewDefaults;

export default memo(ListViewBuilder);
