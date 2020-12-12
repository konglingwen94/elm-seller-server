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

function pick(obj, keys) {
  const result = {};

  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

function omit(obj, omitKeys = []) {
  const result = {};
  omitKeys = Array(omitKeys).flat(Infinity);
   
  Object.keys(obj).forEach((key) => {
    if (omitKeys.includes(key)) return;
    result[key] = obj[key];
     
  });

  return result;
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

  return obj;
}
function copy(source) {
  let obj = {};
  if (typeof source !== "object") {
    return source;
  }

  if (Array.isArray(source)) {
    obj = [];
    source.forEach((item, index) => {
      obj[index] = copy(item);
    });
    return obj;
  }

  Object.keys(source).forEach((key) => {
    obj[key] = typeof source[key] === "object" ? copy(source[key]) : source[key];
  });
  return obj;
}
module.exports = {
  resolvePagination,
  resolveFilterOptions,
  defaults,
  pick,
  omit,
  copy,
};
