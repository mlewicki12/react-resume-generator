
export type ResumeDefinition = {
  header: ResumeHeader;
  body: ResumeComponent[];
}

export type ResumeHeader = {
  name: string;
  position: string;
  profile: string;
  separator: boolean;

  info: string[];
}

export type ResumeComponent = {
  type: string;
}

export interface Separator extends ResumeComponent {
  title: string;
}

export interface Job extends ResumeComponent {
  company: string;
  location: string;
  title: string;

  start: string | string[];
  end: string | string[];

  responsibilities: string[];
}

export interface Uni extends ResumeComponent {
  university: string;
  location: string;
  degree: string;

  start: string;
  end: string;

  gpa: string;
  awards: string[];
  extracurriculars: string[];
  coursework: string[];
}

export interface Extra extends ResumeComponent {
  title: string;
  description: string;
  
  start?: string;
  end?: string;
}

export interface Summary extends ResumeComponent {
  body: string;
}