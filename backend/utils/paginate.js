// utils/pagination.js
exports.paginate = (req) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
  
    return { limit, offset };
  };
  