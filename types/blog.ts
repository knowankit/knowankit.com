export type Post = {
  post: {
    slug: string;
    title: string;
    summary: string;
    publishedAt: string;
  };
};

export type Posts = {
  posts: Post[];
};
