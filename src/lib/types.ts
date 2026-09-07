export interface Scenario {
  title: string;
  slug: string;
  role: string;
  category: string;
  summary: string;
  painPoint: string;
  aiCanHelp: string;
  humanShouldDo: string;
  steps: string[];
  prompt: string;
  example: string;
  safety: string;
  source: string;
  version: string;
  tags: string[];
  content: string;
}

export interface Role {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  available: boolean;
  painPoints: string[];
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}
