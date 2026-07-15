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
    supportTypes: ["affordable-rental", "family-housing"],
    regions: ["edmonton", "other"],
  },
  {
    id: "riverside",
    name: "Riverside Family Housing",
    location: "Calgary",
    housingType: "Family housing",
    description:
      "Sample townhomes close to schools and community services.",
    estimatedWait: "4 to 10 months",
    rent: "$950 to $1,350 per month",
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
    supportTypes: ["seniors-housing"],
    regions: ["other", "edmonton", "calgary"],
  },
];