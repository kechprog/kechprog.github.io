export interface Project {
  id: string;
  title: string;
  description: string;
  extendedDescription: string;
  image: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}
