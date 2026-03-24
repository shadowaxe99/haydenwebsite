export interface Experience {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

export interface Publication {
  title: string;
  citation: string;
  date: string;
  content?: string[];
}

export interface Leadership {
  role: string;
  organization: string;
  period: string;
  description: string[];
}
