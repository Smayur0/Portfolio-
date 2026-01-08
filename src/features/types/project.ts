export type Project = {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** Project image URL */
  image: string;
  /** GitHub repository URL */
  githubUrl?: string;
  /** Deployed site URL */
  deployedUrl?: string;
  /** Array of technologies used */
  technologies: string[];
  /** Whether the project is deployed */
  isDeployed: boolean;
};


