function paginate(items, page, pageSize) {
  // Fixed: was (page - 1) * pageSize + 1
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    items: items.slice(start, end),
    total: items.length,
    page,
    totalPages: Math.ceil(items.length / pageSize)
  };
}

module.exports = { paginate };
