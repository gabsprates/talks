const defaultDomain = 'liferay.cloud';

const request = {
  fetchServiceDomains: () => ({
    default: defaultDomain,
    custom:
      Array(4)
        .fill(defaultDomain)
        .map((domain, i) => domain.replace('.', `-custom-${i}`))
  })
};

module.exports = request;
