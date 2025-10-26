export const mockTrusteesData = {
  portfolio: {
    sites: 3,
    units: 847,
    occupancy: 94.2,
    arrears_pct: 3.8,
    dso: 28,
    totalValue: 425000000
  },
  finance: {
    cashflow: [
      { month: "Apr", inflow: 8420000, outflow: 6234000 },
      { month: "May", inflow: 8567000, outflow: 6891000 },
      { month: "Jun", inflow: 8234000, outflow: 6123000 },
      { month: "Jul", inflow: 8789000, outflow: 7234000 },
      { month: "Aug", inflow: 8456000, outflow: 6567000 },
      { month: "Sep", inflow: 8901000, outflow: 6789000 },
      { month: "Oct", inflow: 8723000, outflow: 6456000 }
    ],
    arrears_aging: {
      "0-30d": 2.1,
      "31-60d": 1.2,
      "60d+": 0.5
    },
    budget_variance: {
      opex: -4.2,
      capex: 8.7
    }
  },
  esg: {
    energy_per_sqm: 142,
    energy_trend: -8.3,
    water_per_capita: 187,
    water_trend: -5.2,
    carbon_tonnes: 324,
    carbon_trend: -12.1,
    waste_diversion: 68
  },
  security: {
    incidents_per_100_units: 1.2,
    mttr_hours: 2.4,
    false_positive_rate: 0.8,
    compliance_score: 94
  },
  kpis: [
    { label: "Occupancy Rate", value: "94.2%", trend: 1.2, status: "good" },
    { label: "Arrears", value: "3.8%", trend: -0.3, status: "good" },
    { label: "DSO", value: "28 days", trend: -2, status: "good" },
    { label: "Energy Intensity", value: "142 kWh/m²", trend: -8.3, status: "good" },
    { label: "Water Usage", value: "187 L/capita", trend: -5.2, status: "good" },
    { label: "Carbon Footprint", value: "324 tCO₂e", trend: -12.1, status: "good" }
  ]
};
