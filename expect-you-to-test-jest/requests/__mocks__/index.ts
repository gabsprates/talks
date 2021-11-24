import { FetchServiceDomains } from "..";
import { ServiceDomains } from "../../typeDefs/services/ServiceDomains";
import { customDomains, defaultDomain } from "../mocks";

type MockedServiceIds = "empty" | "full" | "only-default" | "only-custom";

export const fetchServiceDomains: FetchServiceDomains = async serviceId => {
  const entries: Record<MockedServiceIds, ServiceDomains> = {
    empty: null,
    full: {
      default: defaultDomain,
      custom: customDomains
    },
    "only-default": {
      default: defaultDomain
    },
    "only-custom": {
      custom: customDomains
    }
  };

  return entries[serviceId as MockedServiceIds] || entries.empty;
};
