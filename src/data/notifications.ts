export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  timestamp: string;
  read: boolean;
  snoozed?: boolean;
  snoozeUntil?: string;
  category: 'security' | 'maintenance' | 'billing' | 'community' | 'system';
}

export interface ChannelPreferences {
  email: boolean;
  sms: boolean;
  push: boolean;
  inApp: boolean;
}

export interface NotificationPreferences {
  security: ChannelPreferences;
  maintenance: ChannelPreferences;
  billing: ChannelPreferences;
  community: ChannelPreferences;
  system: ChannelPreferences;
}

export const mockNotifications: Notification[] = [
  {
    id: "n001",
    title: "Access Event",
    message: "Unauthorized access attempt detected at Parking Level 2 Gate",
    type: "warning",
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    read: false,
    category: "security"
  },
  {
    id: "n002",
    title: "Maintenance Complete",
    message: "HVAC system maintenance completed successfully in Building A",
    type: "success",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    read: false,
    category: "maintenance"
  },
  {
    id: "n003",
    title: "Payment Received",
    message: "Unit 504 payment processed - R 4,250.00",
    type: "success",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    read: true,
    category: "billing"
  },
  {
    id: "n004",
    title: "High Energy Usage",
    message: "Common area energy consumption 23% above baseline",
    type: "warning",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    read: false,
    category: "system"
  },
  {
    id: "n005",
    title: "Community Event",
    message: "Pool area booked for residents meeting tomorrow 6 PM",
    type: "info",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    read: true,
    category: "community"
  },
  {
    id: "n006",
    title: "EV Charging Alert",
    message: "Bay 7 charging session completed - 45 kWh delivered",
    type: "info",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    read: true,
    category: "system"
  },
  {
    id: "n007",
    title: "Security System Update",
    message: "Biometric access system firmware updated successfully",
    type: "success",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    read: true,
    category: "security"
  },
  {
    id: "n008",
    title: "Predictive Alert",
    message: "Elevator B showing early signs of wear - schedule inspection",
    type: "warning",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    read: false,
    snoozed: true,
    snoozeUntil: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    category: "maintenance"
  }
];

export const defaultPreferences: NotificationPreferences = {
  security: { email: true, sms: true, push: true, inApp: true },
  maintenance: { email: true, sms: false, push: true, inApp: true },
  billing: { email: true, sms: true, push: false, inApp: true },
  community: { email: false, sms: false, push: true, inApp: true },
  system: { email: false, sms: false, push: false, inApp: true }
};
