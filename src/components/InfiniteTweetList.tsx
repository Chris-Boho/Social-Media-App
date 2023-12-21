import React from "react";

type Tweet = {
  id: string;
  content: string;
  createdAt: Date;
  likedCount: number;
  likedByMe: boolean;
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
};

type Props = {
  isLoading: boolean;
  isError: boolean;
  hasMore?: boolean;
  fetchNewTweets: () => Promise<unknown>;
  tweets?: Tweet[];
};

export default function InfiniteTweetList({
  tweets,
  isError,
  isLoading,
  hasMore,
  fetchNewTweets,
}: Props) {
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error...</div>;
  if (tweets == null || tweets.length === 0)
    return (
      <h2 className="my-4 text-center text-2xl text-gray-500">No Tweets</h2>
    );
  return <div>InfiniteTweetList</div>;
}
