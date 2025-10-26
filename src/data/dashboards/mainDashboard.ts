export const mockMainDashboard = {
  overview: {
    iot: {
      zones: 42,
      healthy: 38,
      warning: 3,
      offline: 1,
      lastUpdate: "2025-10-26T18:45:00Z"
    },
    security: {
      events_24h: 1847,
      incidents: 2,
      access_success_rate: 99.4,
      unauthorized_attempts: 3
    },
    energy: {
      current_kw: 387,
      daily_kwh: 9234,
      trend: -12,
      peak_today: 445
    },
    ev: {
      active_sessions: 14,
      queue: 3,
      capacity_used: 78,
      total_bays: 18
    },
    maintenance: {
      p1: 2,
      p2: 8,
      p3: 15,
      predicted_48h: 3
    },
    wellness: {
      comfort_index: 87,
      air_quality: "Good",
      noise_compliance: 94,
      temp_avg: 22
    }
  },
  aiInsights: [
    {
      title: "Energy Usage Down 12%",
      description: "Solar production increased 18% this week, reducing grid dependency.",
      type: "positive",
      priority: "medium"
    },
    {
      title: "3 Maintenance Items Due",
      description: "Predictive analysis suggests servicing HVAC Unit B-204 within 48 hours.",
      type: "warning",
      priority: "high"
    }
  ],
  energyHistory: [
    { date: "2025-10-20", kwh: 9845 },
    { date: "2025-10-21", kwh: 9567 },
    { date: "2025-10-22", kwh: 9234 },
    { date: "2025-10-23", kwh: 8998 },
    { date: "2025-10-24", kwh: 9123 },
    { date: "2025-10-25", kwh: 8887 },
    { date: "2025-10-26", kwh: 9234 }
  ]
};
