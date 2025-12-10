import { user } from "./user";

export const SITE_INFO = {
  name: user.userName,
  url: process.env.APP_URL || "https://mayurshelke.dev",
//   ogImage: user.ogImage,
  description: user.bio,
  keywords: user.keywords,
};
