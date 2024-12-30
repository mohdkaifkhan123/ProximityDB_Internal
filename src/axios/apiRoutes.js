const apiRoutes = {
  stats: "/internal/stats",
  paginatedAnalytics: (page) => `/internal/users?page=${page}?limit=${10}`,
  getReviewCount: (userId) => `/internal/review/count?userId=${userId}`,
  completeTopic:"/internal/complete-topic"
};

export default apiRoutes;
