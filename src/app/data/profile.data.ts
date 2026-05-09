export interface Experience {
  role: string;
  company: string;
  industry: string;
  period: string;
  location: string;
  tags: string[];
  isCurrent: boolean;
  description: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  installs: number;
  rating: number | null;
  reviewCount: number;
  featured: boolean;
  url: string;
  githubUrl: string;
  tags: string[];
}

export interface WebProject {
  name: string;
  tagline: string;
  description: string;
  url: string;
  githubUrl: string;
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  type: 'azure' | 'cambridge';
  verifyUrl: string;
}

export const PROFILE = {
  name: 'Danilo Colombi',
  role: 'Senior Full-stack Engineer',
  location: 'Brazil · Remote',
  yearsOfExperience: 8,
  bio: 'Senior full-stack engineer with 8 years shipping web applications for enterprise clients and digital banks. Specialized in Angular, .NET Core, and Azure — with published developer tools used by hundreds of teams on the Visual Studio Marketplace. Azure-certified across development and DevOps.',
  linkedin: 'https://www.linkedin.com/in/danilo-colombi/',
  github: 'https://github.com/danilocolombi',
  email: 'danilocolombitavares@gmail.com',
  roles: [
    'Senior Full-stack Engineer',
    'Angular Engineer',
    '.NET Core Engineer',
    'Cloud & DevOps Engineer',
  ],
};

export const EXPERIENCE: Experience[] = [
  {
    role: 'Senior Full-stack Developer',
    company: 'Lean Tech',
    industry: 'Software Consulting',
    period: 'Jul 2024 – Present',
    location: 'Remote',
    tags: ['Angular', '.NET Core', '.NET Framework', 'Microservices', 'Azure'],
    isCurrent: true,
    description: [
      'Maintained and extended a legacy .NET Framework 4.8 ERP, ensuring stability and continuity for critical business operations.',
      'Developed scheduling and production management software with multiple third-party integrations, built as microservices and deployed on Azure.',
      'Conducted technical interviews for engineering candidates, contributing to team growth and hiring standards.',
    ],
  },
  {
    role: 'Full-stack Developer III',
    company: 'Caterpillar Inc.',
    industry: 'Manufacturing',
    period: 'Mar 2023 – Jul 2024',
    location: 'Piracicaba, SP, Brazil',
    tags: ['Angular', 'Azure DevOps', '.NET Core'],
    isCurrent: false,
    description: [
      'Developed internal tooling and operational dashboards for manufacturing teams.',
      'Integrated Azure DevOps pipelines into engineering workflows, improving release automation and deployment reliability.',
      'Collaborated with cross-functional teams to deliver full-stack features in a large-scale enterprise environment.',
    ],
  },
  {
    role: 'Backend Developer II',
    company: 'Banco Modal',
    industry: 'Fintech',
    period: 'Aug 2022 – Jan 2023',
    location: 'São Paulo, Brazil',
    tags: ['.NET Core', 'Azure DevOps'],
    isCurrent: false,
    description: [
      'Designed and maintained RESTful microservices powering the digital banking platform.',
      'Worked in a regulated fintech environment with strict compliance and security requirements.',
      'Used Azure DevOps for CI/CD pipelines and release management across multiple environments.',
    ],
  },
  {
    role: 'Full-stack Developer II',
    company: 'Tata Consultancy Services',
    industry: 'IT Consulting',
    period: 'Dec 2021 – Aug 2022',
    location: 'São Paulo, Brazil',
    tags: ['Angular', 'Scrum', '.NET Core'],
    isCurrent: false,
    description: [
      'Delivered full-stack features for enterprise clients in an Agile/Scrum environment.',
      'Built Angular frontends and .NET Core APIs across multiple client-facing projects.',
    ],
  },
  {
    role: 'Full-stack Developer',
    company: 'Empow Softwares',
    industry: 'Software',
    period: 'Nov 2018 – Nov 2021',
    location: 'Santa Bárbara d\'Oeste, SP, Brazil',
    tags: ['Angular', '.NET Core', 'SQL Server', 'Scrum', 'Docker'],
    isCurrent: false,
    description: [
      'Built web applications from the ground up — architecture, implementation, database design, and deployment.',
      'Worked across the full development lifecycle, developing deep expertise in Angular, .NET Core, and SQL Server.',
      'Introduced Docker-based containerization to improve development consistency and deployment workflows.',
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['.NET Core', 'C#', 'Go', 'RabbitMQ', 'Docker'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Azure', 'Azure DevOps', 'Terraform', 'GitHub', 'CI/CD'],
  },
  {
    category: 'Databases',
    skills: ['SQL Server', 'MongoDB', 'Redis'],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Pipelines Monitor',
    description:
      'Dashboard widget delivering analytics on pipeline executions across your Azure DevOps organization. Tracks run statistics, outcome breakdowns, and average duration.',
    installs: 447,
    rating: 5,
    reviewCount: 5,
    featured: true,
    url: 'https://marketplace.visualstudio.com/items?itemName=danilocolombi.pipelines-monitor',
    githubUrl: 'https://github.com/danilocolombi/pipelines-monitor',
    tags: ['Azure DevOps', 'TypeScript', 'Dashboard Widget'],
  },
  {
    name: 'Repository Insights',
    description:
      'Adds a comprehensive Insights hub to Azure Repos — inspired by GitHub\'s Insights tab. Consolidates Pulse, Contributors, Dependencies, Pipeline Metrics, and Work Item Metrics in one view.',
    installs: 109,
    rating: null,
    reviewCount: 0,
    featured: false,
    url: 'https://marketplace.visualstudio.com/items?itemName=danilocolombi.repository-insights',
    githubUrl: 'https://github.com/danilocolombi/repository-insights',
    tags: ['Azure DevOps', 'TypeScript', 'Azure Repos'],
  },
  {
    name: 'Deployment Monitor',
    description:
      'Dashboard widget for DORA-based deployment frequency metrics per environment. Analyzes the last 12 months of deployments and categorizes frequency into daily, weekly, and monthly buckets.',
    installs: 97,
    rating: null,
    reviewCount: 0,
    featured: false,
    url: 'https://marketplace.visualstudio.com/items?itemName=danilocolombi.deployment-monitor',
    githubUrl: 'https://github.com/danilocolombi/deployment-monitor',
    tags: ['Azure DevOps', 'TypeScript', 'DORA Metrics'],
  },
];

export const WEB_PROJECTS: WebProject[] = [
  {
    name: 'Top 5',
    tagline: 'Five Songs Every Artist Deserves to Be Remembered For',
    description:
      'Hand-curated top 5 song lists for the artists that shaped modern music. No streams, no charts — just five tracks every artist deserves to be remembered for.',
    url: 'https://top-5-ecru.vercel.app/',
    githubUrl: 'https://github.com/danilocolombi/top-5',
    tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'DevOps Engineer Expert',
    issuer: 'Microsoft Certified',
    type: 'azure',
    verifyUrl: 'https://learn.microsoft.com/pt-br/users/danilocolombi-9514/credentials/certifications?tab=credentials-tab',
  },
  {
    title: 'Azure Developer Associate',
    issuer: 'Microsoft Certified',
    type: 'azure',
    verifyUrl: 'https://learn.microsoft.com/pt-br/users/danilocolombi-9514/credentials/certifications?tab=credentials-tab',
  },
  {
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft Certified',
    type: 'azure',
    verifyUrl: 'https://learn.microsoft.com/pt-br/users/danilocolombi-9514/credentials/certifications?tab=credentials-tab',
  },
  {
    title: 'Certificate in Advanced English',
    issuer: 'Cambridge English',
    type: 'cambridge',
    verifyUrl: 'https://www.cambridgeenglish.org/learning-english/find-a-centre/find-an-exam-centre/',
  },
];
