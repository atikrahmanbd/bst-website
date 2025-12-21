import { fetchDomainData } from "@/lib/domain-data";
import { HomeServicesOfferedClient } from "./home-services-offered-client";

export async function HomeServicesOffered() {
  const { totalDomains } = await fetchDomainData();

  return <HomeServicesOfferedClient totalDomains={totalDomains} />;
}
