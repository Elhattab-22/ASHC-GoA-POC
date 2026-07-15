import type { HousingOption } from "../types/housing";

export const housingOptions: HousingOption[] = [
  {
    id: "meadowview",
    name: "Meadowview Apartments",
    location: "Edmonton",
    housingType: "Affordable rental",
    description:
      "Sample apartments for individuals and small families near transit.",
    estimatedWait: "6 to 12 months",
    rent: "Based on household income",
    suitableFor: "Individuals and families",
    latitude: 53.5461,
    longitude: -113.4938,
    supportTypes: ["affordable-rental", "family-housing"],
    regions: ["edmonton", "other"],
  },
  {
    id: "riverside",
    name: "Riverside Family Housing",
    location: "Calgary",
    housingType: "Family housing",
    description: "Sample townhomes close to schools and community services.",
    estimatedWait: "4 to 10 months",
    rent: "$950 to $1,350 per month",
    suitableFor: "Families with children",
    latitude: 51.0447,
    longitude: -114.0719,
    supportTypes: ["family-housing", "affordable-rental"],
    regions: ["calgary", "other"],
  },
  {
    id: "prairie-lodge",
    name: "Prairie Seniors Lodge",
    location: "Central Alberta",
    housingType: "Seniors housing",
    description:
      "Sample independent living with optional community support services.",
    estimatedWait: "3 to 8 months",
    rent: "Varies by income and services",
    suitableFor: "Seniors",
    latitude: 52.2681,
    longitude: -113.8112,
    supportTypes: ["seniors-housing"],
    regions: ["other", "edmonton", "calgary"],
  },
];
