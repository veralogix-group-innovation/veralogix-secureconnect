import { useState } from "react";
import { X, Bell, Clock, Settings, Archive, AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { mockNotifications, defaultPreferences, Notification, NotificationPreferences } from "@/data/notifications";
import { cn } from "@/lib/utils";

interface NotificationsCenterProps {
  onClose: () => void;
}

export const NotificationsCenter = ({ onClose }: NotificationsCenterProps) => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [preferences, setPreferences] = useState<NotificationPreferences>(defaultPreferences);

  const unreadCount = notifications.filter(n => !n.read && !n.snoozed).length;
  const snoozedCount = notifications.filter(n => n.snoozed).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const snoozeNotification = (id: string) => {
    const snoozeUntil = new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString();
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, snoozed: true, snoozeUntil } : n
    ));
  };

  const unsnoozeNotification = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, snoozed: false, snoozeUntil: undefined } : n
    ));
  };

  const archiveNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'error': return <XCircle className="h-5 w-5 text-red-500" />;
      case 'success': return <CheckCircle className="h-5 w-5 text-primary" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getCategoryBadge = (category: Notification['category']) => {
    const colors = {
      security: "bg-red-500/20 text-red-400 border-red-500/30",
      maintenance: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      billing: "bg-primary/20 text-primary border-primary/30",
      community: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      system: "bg-purple-500/20 text-purple-400 border-purple-500/30"
    };
    return (
      <Badge variant="outline" className={cn("text-xs", colors[category])}>
        {category}
      </Badge>
    );
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const updateChannelPreference = (
    category: keyof NotificationPreferences,
    channel: keyof NotificationPreferences[typeof category],
    value: boolean
  ) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [channel]: value
      }
    }));
  };

  const activeNotifications = notifications.filter(n => !n.snoozed);
  const snoozedNotifications = notifications.filter(n => n.snoozed);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-end p-4 pt-20">
      <Card className="w-full max-w-2xl max-h-[calc(100vh-6rem)] flex flex-col glass border-2 border-primary/30 shadow-[var(--glow-neon)]">
        <CardHeader className="border-b border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Notifications Center</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white/70 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        <Tabs defaultValue="inbox" className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="mx-6 mt-4 bg-[#1a1a1a] border border-primary/20">
            <TabsTrigger value="inbox" className="data-[state=active]:bg-primary/20">
              <Bell className="h-4 w-4 mr-2" />
              Inbox {unreadCount > 0 && `(${unreadCount})`}
            </TabsTrigger>
            <TabsTrigger value="snoozed" className="data-[state=active]:bg-primary/20">
              <Clock className="h-4 w-4 mr-2" />
              Snoozed {snoozedCount > 0 && `(${snoozedCount})`}
            </TabsTrigger>
            <TabsTrigger value="preferences" className="data-[state=active]:bg-primary/20">
              <Settings className="h-4 w-4 mr-2" />
              Preferences
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inbox" className="flex-1 overflow-y-auto px-6 pb-6 mt-4">
            <div className="space-y-3">
              {activeNotifications.length === 0 ? (
                <div className="text-center py-12 text-white/50">
                  <Bell className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No notifications</p>
                </div>
              ) : (
                activeNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={cn(
                      "p-4 rounded-lg border transition-all hover:border-primary/50",
                      notification.read 
                        ? "bg-[#1a1a1a] border-primary/20 opacity-70" 
                        : "bg-primary/5 border-primary/30"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {getTypeIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-white flex items-center gap-2">
                            {notification.title}
                            {!notification.read && (
                              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                            )}
                          </h4>
                          <span className="text-xs text-white/50 whitespace-nowrap">
                            {formatTimestamp(notification.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-white/70 mb-2">{notification.message}</p>
                        <div className="flex items-center gap-2">
                          {getCategoryBadge(notification.category)}
                          <div className="flex gap-1 ml-auto">
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="h-7 text-xs text-primary hover:bg-primary/10"
                              >
                                Mark read
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => snoozeNotification(notification.id)}
                              className="h-7 text-xs text-white/70 hover:bg-white/5"
                            >
                              <Clock className="h-3 w-3 mr-1" />
                              Snooze
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => archiveNotification(notification.id)}
                              className="h-7 text-xs text-white/70 hover:bg-white/5"
                            >
                              <Archive className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="snoozed" className="flex-1 overflow-y-auto px-6 pb-6 mt-4">
            <div className="space-y-3">
              {snoozedNotifications.length === 0 ? (
                <div className="text-center py-12 text-white/50">
                  <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No snoozed notifications</p>
                </div>
              ) : (
                snoozedNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-4 rounded-lg border bg-[#1a1a1a] border-primary/20"
                  >
                    <div className="flex items-start gap-3">
                      {getTypeIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-white">{notification.title}</h4>
                          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs">
                            Snoozed
                          </Badge>
                        </div>
                        <p className="text-sm text-white/70 mb-2">{notification.message}</p>
                        {notification.snoozeUntil && (
                          <p className="text-xs text-white/50 mb-2">
                            Until: {new Date(notification.snoozeUntil).toLocaleString()}
                          </p>
                        )}
                        <div className="flex items-center gap-2">
                          {getCategoryBadge(notification.category)}
                          <div className="flex gap-1 ml-auto">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => unsnoozeNotification(notification.id)}
                              className="h-7 text-xs text-primary hover:bg-primary/10"
                            >
                              Unsnooze
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => archiveNotification(notification.id)}
                              className="h-7 text-xs text-white/70 hover:bg-white/5"
                            >
                              <Archive className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="preferences" className="flex-1 overflow-y-auto px-6 pb-6 mt-4">
            <div className="space-y-6">
              <p className="text-sm text-white/70">
                Configure how you receive notifications for each category across different channels.
              </p>

              {(Object.keys(preferences) as Array<keyof NotificationPreferences>).map((category) => (
                <Card key={category} className="glass border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg capitalize flex items-center gap-2">
                      {getCategoryBadge(category)}
                      <span className="ml-2">{category} Notifications</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`${category}-email`} className="text-white/80">Email</Label>
                      <Switch
                        id={`${category}-email`}
                        checked={preferences[category].email}
                        onCheckedChange={(value) => updateChannelPreference(category, 'email', value)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`${category}-sms`} className="text-white/80">SMS</Label>
                      <Switch
                        id={`${category}-sms`}
                        checked={preferences[category].sms}
                        onCheckedChange={(value) => updateChannelPreference(category, 'sms', value)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`${category}-push`} className="text-white/80">Push Notification</Label>
                      <Switch
                        id={`${category}-push`}
                        checked={preferences[category].push}
                        onCheckedChange={(value) => updateChannelPreference(category, 'push', value)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`${category}-inApp`} className="text-white/80">In-App</Label>
                      <Switch
                        id={`${category}-inApp`}
                        checked={preferences[category].inApp}
                        onCheckedChange={(value) => updateChannelPreference(category, 'inApp', value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};
