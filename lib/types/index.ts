export interface JobProps {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  type: string;
  locationType: string;
  location?: string | null;
  salary: string;
  companyName: string;
  applicationEmail?: string | null;
  applicationUrl?: string | null;
  companyLogoUrl?: string | null;
  approved?: boolean;
  userId?: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export interface addJobProps {
  title: string;
  slug: string;
  description?: string | null;
  type: string;
  locationType: string;
  location?: string | null;
  salary: number;
  companyName: string;
  applicationEmail?: string | null;
  applicationUrl?: string | null;
  companyLogoUrl?: string;
  userId?: string | undefined;
}
