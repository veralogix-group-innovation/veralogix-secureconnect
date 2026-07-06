import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://secureconnect-app.veralogix-group.com";

const staticPaths = [
  "/",
  "/services",
  "/demo",
  "/residence",
  "/trustees",
  "/managing-agent",
  "/case-studies",
  "/contact",
  "/privacy",
  "/security",
];

const serviceSlugs = [
  "smart-iot-sensors",
  "ai-concierge",
  "biometric-access",
  "vertical-farms",
  "predictive-maintenance",
  "ev-charging",
  "ar-leasing",
  "dynamic-pricing",
  "wellness-monitoring",
  "virtual-property-management",
  "drone-inspections",
  "guardian-follow-me",
  "community-platform",
];

const entries = [
  ...staticPaths.map((path) => ({ path, changefreq: "weekly", priority: path === "/" ? "1.0" : "0.8" })),
  ...serviceSlugs.map((slug) => ({ path: `/services/${slug}`, changefreq: "monthly", priority: "0.7" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      `  </url>`,
    ].join("\n")
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
