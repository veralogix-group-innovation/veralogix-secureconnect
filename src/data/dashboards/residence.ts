export const mockResidenceData = {
  resident: {
    name: "Alex Thompson",
    unit: "B204",
    balance: 2450.00,
    currency: "ZAR"
  },
  passes: [
    {
      id: "VP-8821",
      name: "Sarah Williams",
      date: "2025-10-26",
      time: "18:00",
      status: "Active",
      areas: ["Lobby", "Parking"],
      qrCode: "QR-8821-ABCD"
    },
    {
      id: "VP-8820",
      name: "John Davis",
      date: "2025-10-25",
      time: "14:30",
      status: "Used",
      areas: ["Lobby"],
      qrCode: "QR-8820-EFGH"
    }
  ],
  bookings: [
    {
      id: "BK-3301",
      amenity: "Pool Deck",
      date: "2025-10-27",
      time: "14:00-16:00",
      status: "Confirmed",
      cost: 150
    },
    {
      id: "BK-3302",
      amenity: "Gym",
      date: "2025-10-28",
      time: "06:00-07:00",
      status: "Confirmed",
      cost: 0
    }
  ],
  evSessions: [
    {
      id: "EV-9912",
      bay: "P2-07",
      started: "2025-10-26T20:30:00Z",
      kwh: 12.4,
      cost: 186.00,
      status: "Charging",
      estimatedCompletion: "2025-10-26T23:15:00Z"
    }
  ],
  digitalKeys: [
    {
      id: "KEY-001",
      name: "Main Entrance",
      status: "Active",
      lastUsed: "2025-10-26T08:15:00Z"
    },
    {
      id: "KEY-002",
      name: "Parking Gate P2",
      status: "Active",
      lastUsed: "2025-10-26T18:20:00Z"
    },
    {
      id: "KEY-003",
      name: "Gym Access",
      status: "Active",
      lastUsed: "2025-10-25T06:30:00Z"
    }
  ],
  transactions: [
    {
      id: "TXN-5501",
      date: "2025-10-01",
      description: "Monthly Levy",
      amount: -2200.00,
      status: "Paid"
    },
    {
      id: "TXN-5502",
      date: "2025-10-15",
      description: "Pool Deck Booking",
      amount: -150.00,
      status: "Paid"
    },
    {
      id: "TXN-5503",
      date: "2025-10-20",
      description: "EV Charging",
      amount: -186.00,
      status: "Pending"
    }
  ]
};
