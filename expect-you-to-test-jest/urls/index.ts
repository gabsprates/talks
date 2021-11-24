import { fetchServiceDomains } from "../requests";

export const getListOfAllUrls = async (serviceId: string) => {
  const serviceDomains = await fetchServiceDomains(serviceId);

  const domains: string[] = [];

  if (serviceDomains === null) {
    return domains;
  }

  if (serviceDomains.default) {
    domains.push(serviceDomains.default);
  }

  if (serviceDomains.custom) {
    domains.push(...serviceDomains.custom);
  }

  return domains;
};
