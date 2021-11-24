import { ServiceDomains } from "../typeDefs/services/ServiceDomains";

export type FetchServiceDomains = (
  serviceId: string
) => Promise<ServiceDomains>;

export const fetchServiceDomains: FetchServiceDomains = async serviceId => {
  const response = await fetch(`/service/${serviceId}/domains`);

  return await response.json();
};
