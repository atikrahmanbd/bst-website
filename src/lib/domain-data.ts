interface DomainPriceData {
  tld: string;
  category?: string;
  tag?: string | null;
  register: string;
  transfer: string;
  renew: string;
  grace?: string;
}

interface DomainPricingResponse {
  lastUpdated: string;
  currency: string;
  spotlightTlds: DomainPriceData[];
  domains: DomainPriceData[];
}

// Extended Fallback TLD List
const FALLBACK_TLDS = [
  ".com",
  ".net",
  ".org",
  ".xyz",
  ".online",
  ".store",
  ".tech",
  ".site",
  ".fun",
  ".info",
];

// Default Prices For Fallback TLDs (Used Only If JSON Fetch Fails Completely)
const DEFAULT_FALLBACK_PRICES: Record<string, string> = {
  ".com": "৳1,799",
  ".net": "৳1,900",
  ".org": "৳1,600",
  ".xyz": "৳200",
  ".online": "৳550",
  ".store": "৳1,800",
  ".tech": "৳1,700",
  ".site": "৳500",
  ".fun": "৳1,200",
  ".info": "৳1,500",
};

export interface DomainDataResult {
  spotlightDomains: { extension: string; price: string; tag?: string | null }[];
  totalDomains: number;
  allDomains: DomainPriceData[];
}

export async function fetchDomainData(): Promise<DomainDataResult> {
  try {
    const externalJsonUrl =
      process.env.NEXT_PUBLIC_DOMAIN_PRICING_URL ||
      "https://my.bst.com.bd/domain-prices.json";

    const response = await fetch(externalJsonUrl, {
      next: { revalidate: 3600 }, // Cache For 1 Hour
    });

    if (!response.ok) {
      throw new Error("Failed To Fetch Domain Pricing");
    }

    const data: DomainPricingResponse = await response.json();
    const spotlightTlds = data.spotlightTlds || [];
    const allDomains = data.domains || [];

    // Create A Map For Quick Price Lookup From All Domains
    const domainPriceMap = new Map<
      string,
      { register: string; tag?: string | null }
    >();
    allDomains.forEach((domain) => {
      domainPriceMap.set(domain.tld.toLowerCase(), {
        register: domain.register,
        tag: domain.tag,
      });
    });

    // Get First 6 Spotlight TLDs
    const spotlightDomainsFromApi = spotlightTlds.slice(0, 6).map((domain) => ({
      extension: domain.tld,
      price: domain.register,
      tag: domain.tag,
    }));

    // If We Have 6 Or More Spotlight TLDs, Return First 6
    if (spotlightDomainsFromApi.length >= 6) {
      return {
        spotlightDomains: spotlightDomainsFromApi,
        totalDomains: allDomains.length,
        allDomains,
      };
    }

    // If Less Than 6, Fill Remaining From Fallback List
    const spotlightTldSet = new Set(
      spotlightDomainsFromApi.map((d) => d.extension.toLowerCase())
    );

    const result = [...spotlightDomainsFromApi];

    for (const fallbackTld of FALLBACK_TLDS) {
      if (result.length >= 6) break;

      // Skip If Already In Spotlight List
      if (spotlightTldSet.has(fallbackTld.toLowerCase())) continue;

      // Get Price From JSON Or Use Default
      const domainInfo = domainPriceMap.get(fallbackTld.toLowerCase());
      const price =
        domainInfo?.register || DEFAULT_FALLBACK_PRICES[fallbackTld] || "N/A";
      const tag = domainInfo?.tag || null;

      result.push({
        extension: fallbackTld,
        price,
        tag,
      });
    }

    return {
      spotlightDomains: result,
      totalDomains: allDomains.length,
      allDomains,
    };
  } catch (error) {
    console.error("Error Fetching Domain Data:", error);

    // Complete Fallback - Use Default Prices
    return {
      spotlightDomains: FALLBACK_TLDS.slice(0, 6).map((tld) => ({
        extension: tld,
        price: DEFAULT_FALLBACK_PRICES[tld] || "N/A",
        tag: null,
      })),
      totalDomains: 550, // Fallback Count
      allDomains: [],
    };
  }
}

// Get Price For A Specific TLD From All Domains
export function getDomainPrice(
  allDomains: DomainPriceData[],
  tld: string
): string | null {
  const domain = allDomains.find(
    (d) => d.tld.toLowerCase() === tld.toLowerCase()
  );
  return domain?.register || null;
}
