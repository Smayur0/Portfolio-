export type Blog = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  author?: string;
  content: string[];
};
