export type Experience = {
  /** Job title or position */
  title: string;
  /** Company or organization name */
  company: string;
  /** Company logo/image URL */
  companyImage?: string;
  /** Location of the job (city, country, etc.) */
  location?: string;
  /** Start date in format "YYYY" or "MMM YYYY" */
  startDate: string;
  /** End date in format "YYYY" or "MMM YYYY" (optional if current is true) */
  endDate?: string;
  /** Whether this is the current position */
  current?: boolean;
  /** Array of description bullet points */
  description?: string[];
  /** Array of technologies/skills used */
  technologies?: string[];
};

