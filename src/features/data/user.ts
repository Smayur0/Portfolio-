import { User } from "../types/user";

export const user: User = {
  firstName: "Mayur",
  lastName: "Shelke",
  gender: "male",
  pronouns: "he/him",
  bio: "Transforming ideas into interactive realities",
  flipSentences: [
    "Transforming ideas into interactive realities",
    "Frontend Developer",
    "MERN stack developer",
  ],
  address: "Pune, India",
  phoneNumber: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "mayurshelke.dev@gmail.com", // base64 encoded
  website: "https://mayurshelke.dev",
  jobTitle: "Frontend Developer",
  jobs: [
    {
      title: "Associate Software Engineer",
      company: "Quinite",
    },
    {
      title: "Software Developer",
      company: "iConnect",
    },
  ],
  about: `
- **Full Stack Web Developer** with **2+ years of experience**.
- Skilled in **Next.js**, **React**, **TypeScript**,  and modern front-end technologies; building high-quality, user-centric web and mobile applications.
- Passionate about exploring new technologies and turning ideas into reality, thoughtfully crafted personal projects.
- 
I’ve worked across both frontend (React) and backend (Node.js, Express), built and integrated REST APIs, and have hands-on experience with MongoDB and MySQL.
I've also worked with AWS services for deploying and managing applications.

I enjoy building clean, scalable solutions and continuously learning new technologies.`,
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1764345394",
  //   namePronunciationUrl: "/audio/chanhdai.mp3",
  //   timeZone: "Asia/Ho_Chi_Minh",
  //   keywords: [
  //     "ncdai",
  //     "nguyenchanhdai",
  //     "nguyen chanh dai",
  //     "chanhdai",
  //     "chanh dai",
  //     "iamncdai",
  //     "quaric",
  //     "zadark",
  //     "nguyễn chánh đại",
  //     "chánh đại",
  //   ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
