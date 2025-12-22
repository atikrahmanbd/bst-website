/**
 * Domain Check Types
 * Shared Between Server Action And Client Components
 */

export interface DomainCheckResult {
  domain: string;
  tld: string;
  available: boolean;
  status: string;
  premium?: boolean;
  pricing: {
    register: string | null;
    transfer: string | null;
    renew: string | null;
  } | null;
  premiumPricing?: {
    register: string;
    renew: string;
  };
  error?: string;
}

export interface DomainCheckResponse {
  success: boolean;
  query: string;
  currency?: {
    code: string;
    prefix: string;
    suffix: string;
  };
  totalTlds?: number;
  results: DomainCheckResult[];
  error?: string;
  code?: string;
}
