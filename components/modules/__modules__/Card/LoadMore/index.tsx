import { Button } from "antd";
import React from "react";

export const LoadMore = ({
  size,
  showLoadMore,
  onLoadMore,
}: {
  size: number;
  showLoadMore: boolean;
  onLoadMore: () => void;
}) => {
  // Only load more if the current category can have more elements
  // In this case if it's lower than 12 then it can't even fill first batch of 12 so no need to load again
  if (size === 0 || size < 8) {
    return <div />;
  }
  return showLoadMore ? (
    <div className="h-32 mt-12 mb-12 text-center leading-8">
      <Button onClick={onLoadMore} className="rounded-xl">
        Load More
      </Button>
    </div>
  ) : (
    <div />
  );
};
