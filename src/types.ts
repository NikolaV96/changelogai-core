export type Changelog = {
  id: string;
  title: string;
  content: string; // TipTap JSON or HTML
  createdAt: string;
};

export type FetchChangelogsResponse = Changelog[];
