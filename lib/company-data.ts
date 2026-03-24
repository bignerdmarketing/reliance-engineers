/**
 * Typed interfaces and constants for Reliance Engineers company data.
 */

export interface CompanyData {
  company: {
    name: string;
    legalName: string;
    tagline: string;
    description: string;
    founded: string;
    headquarters: { city: string; state: string; address: string };
    website: string;
    phone: string;
    email: string;
    entityType: string;
    size: string;
    sector: string;
    samRegistration: {
      uei: string;
      cageCode: string;
      duns: string;
      status: string;
      expirationDate: string;
      initialRegistration: string;
      lastUpdated: string;
    };
  };
  leadership: Array<{
    name: string;
    title: string;
    bio: string;
    photoUrl: string;
    linkedin: string;
    order: number;
  }>;
  services: Array<{
    name: string;
    description: string;
    icon: string;
    category: string;
  }>;
  naicsCodes: Array<{ code: string; description: string; primary: boolean }>;
  pscCodes: Array<{ code: string; description: string; primary: boolean }>;
  contractVehicles: Array<{
    name: string;
    number: string;
    agency: string;
    description: string;
    status?: string;
  }>;
  certifications: Array<{
    name: string;
    type: string;
    certifyingBody: string;
    status: string;
    expirationDate: string | null;
    description: string;
  }>;
  setAsides: string[];
  clearances: {
    facilityLevel: string;
    note: string;
  };
  brandAssets: {
    logo: string;
    logoAlt: string;
    favicon: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    footerBackground: string;
    fonts: { heading: string; body: string };
  };
  differentiators: string[];
  positioningRecommendation: string;
  pastPerformance: Array<{
    client: string;
    project: string;
    description: string;
    value: string;
    period: string;
    source: string;
  }>;
  testimonials: Array<{
    quote: string;
    author: string;
    title: string;
    organization: string;
    source: string;
  }>;
  caseStudies: Array<{
    title: string;
    summary: string;
    results: string[];
    url: string;
  }>;
  additionalContent: {
    missionStatement: string;
    valueProposition: string;
    capabilitiesNarrative: string;
    coreValues: string[];
    awardsAndRecognitions: string[];
    keyClients: string[];
    serviceAreas: string[];
    geographicPresence: {
      offices: string[];
      dbeStates: string[];
    };
    companyFounded: string;
    notableAchievements: string[];
    federalRegistration: {
      uei: string;
      cage: string;
      naics: string;
      samRegistered: boolean;
      federallyRegisteredSince: string;
      socioeconomicStatus: string[];
    };
  };
  pages: string[];
}

/** Company constants for use across the site */
export const COMPANY = {
  name: 'Reliance Engineers',
  legalName: 'Reliance Engineers LLC',
  tagline: 'An experienced team you can rely on',
  phone: '781-697-8304',
  email: 'info@reliance-eng.com',
  address: '30 Yarmouth Road, Wellesley Hills, MA 02481',
  website: 'https://reliance-eng.com',
  founded: '2013',
  uei: 'FKGFRQYJL8M2',
  cageCode: '7XND3',
  linkedin: 'https://www.linkedin.com/company/reliance-engineers',
} as const;
