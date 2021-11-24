export const defaultDomain = "liferay.cloud";

export const customDomains = Array<string>(4)
  .fill(defaultDomain)
  .map((domain, i) => domain.replace(".", `-custom-${i}.`));
