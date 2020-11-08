function resolvePagination(pagination = {}) {
  const defaults = { page: 1, pageSize: 10 };

  pagination.page = parseInt(pagination.page, 10);
  pagination.pageSize = parseInt(pagination.pageSize, 10);

  if (Number.isNaN(pagination.page) || pagination.page <= 0) {
    pagination.page = defaults.page;
  }
  if (Number.isNaN(pagination.pageSize) || pagination.pageSize <= 0) {
    pagination.pageSize = defaults.pageSize;
  }

  const { page, pageSize } = pagination;
  return {
    page,
    pageSize,
  };
}
function resolveFilterOptions(filter = {}) {
  let sort = {
    createdAt: -1,
  };
  sort = defaults({}, filter.sort, sort);
  // filter = Object.assign({}, defaults, filter);

  const { page, pageSize } = resolvePagination({
    page: filter.page,
    pageSize: filter.pageSize,
  });
  return {
    limit: pageSize,
    skip: (page - 1) * pageSize,
    sort,
  };
}

function defaults(obj, ...sources) {
  obj = Object(obj);
  sources.forEach((source) => {
    source = Object(source);
    for (const key in source) {
      const value = obj[key];
      if (value === undefined) {
        obj[key] = source[key];
      }
    }
  });
}

module.exports = {
  resolvePagination,
  resolveFilterOptions,
  defaults,
};