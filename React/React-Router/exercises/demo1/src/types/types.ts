export type News = {
  id: string;
  title: string;
  slug: string;
  sourceUrl: string;
  sourceTitle: string;
  emotionTag: string;
  summary: string;
  quote: string;
  datePublished: string;
  relevanceReasons: string;
};

export type Posts = {
  id: string;
  title: string;
  category: string;
  image: string;
  content: string;
};
