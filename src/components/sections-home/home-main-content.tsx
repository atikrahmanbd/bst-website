import { fetchDomainData } from "@/lib/domain-data";
import { HomeMainContentClient } from "./home-main-content-client";

export async function HomeMainContent() {
  const { totalDomains } = await fetchDomainData();

  return <HomeMainContentClient totalDomains={totalDomains} />;
}
