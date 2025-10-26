export const mockManagingAgentData = {
  overview: {
    incidents: {
      open: 12,
      p1: 2,
      p2: 5,
      p3: 5
    },
    maintenance: {
      scheduled: 23,
      overdue: 3,
      predicted: 7
    },
    security_events_24h: 1847,
    energy_now_kw: 387,
    water_now_m3h: 14.2
  },
  incidents: [
    {
      id: "INC-1042",
      severity: "P1",
      title: "Roof leak above lift shaft",
      building: "Block B",
      reported: "2025-10-26T14:30:00Z",
      sla_remaining: "2h 15m",
      assignee: "Maintenance Team A",
      status: "In Progress"
    },
    {
      id: "INC-1041",
      severity: "P2",
      title: "HVAC noise complaint Unit 304",
      building: "Block A",
      reported: "2025-10-26T12:15:00Z",
      sla_remaining: "6h 45m",
      assignee: "Maintenance Team B",
      status: "Assigned"
    },
    {
      id: "INC-1040",
      severity: "P1",
      title: "Water pressure issue Floors 8-12",
      building: "Block C",
      reported: "2025-10-26T09:00:00Z",
      sla_remaining: "1h 30m",
      assignee: "Plumbing Team",
      status: "In Progress"
    }
  ],
  accessFeed: [
    {
      ts: "2025-10-26T18:31:00Z",
      door: "Lobby A",
      user: "Resident #247",
      result: "Granted",
      method: "Biometric"
    },
    {
      ts: "2025-10-26T18:29:12Z",
      door: "Parking P2",
      user: "Visitor #88214",
      result: "Denied",
      method: "QR Code"
    },
    {
      ts: "2025-10-26T18:28:45Z",
      door: "Lobby B",
      user: "Resident #189",
      result: "Granted",
      method: "RFID"
    }
  ],
  doors: [
    { id: "DOOR-001", name: "Lobby A", status: "Online", battery: 98 },
    { id: "DOOR-002", name: "Lobby B", status: "Online", battery: 87 },
    { id: "DOOR-003", name: "Parking P2", status: "Warning", battery: 23 },
    { id: "DOOR-004", name: "Gym Entrance", status: "Online", battery: 95 }
  ],
  evBays: [
    { id: "BAY-01", status: "Charging", user: "Resident #142", kwh: 12.4, completion: 85 },
    { id: "BAY-02", status: "Charging", user: "Resident #089", kwh: 8.7, completion: 45 },
    { id: "BAY-03", status: "Available", user: null, kwh: 0, completion: 0 },
    { id: "BAY-04", status: "Reserved", user: "Resident #234", kwh: 0, completion: 0 }
  ]
};
