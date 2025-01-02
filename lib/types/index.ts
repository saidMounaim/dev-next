export interface JobProps {
  id: string;
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
  companyLogoUrl?: string | null;
  approved: boolean;
  createdAt: Date;
  updatedAt: Date;
}
