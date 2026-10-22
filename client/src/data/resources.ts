export type ResourceCategory =
  | "F-Gas"
  | "Decarbonisation"
  | "Health & Safety"
  | "Engineering";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  source: string;
  url: string;
  audience: "Engineers" | "Everyone";
}

export const resources: Resource[] = [
  {
    id: "fgas-guidance",
    title: "Understanding F-Gas Compliance",
    description:
      "Explore official UK guidance on handling, servicing, recording and managing fluorinated greenhouse gases.",
    category: "F-Gas",
    source: "GOV.UK",
    url: "https://www.gov.uk/government/collections/fluorinated-gas-f-gas-guidance-for-users-producers-and-traders",
    audience: "Engineers",
  },
  {
    id: "fgas-restrictions",
    title: "F-Gas Equipment Restrictions",
    description:
      "Review official guidance on restrictions affecting refrigeration, air-conditioning and heat pump equipment.",
    category: "F-Gas",
    source: "GOV.UK",
    url: "https://www.gov.uk/guidance/bans-on-f-gas-in-new-products-and-equipment-current-and-future",
    audience: "Engineers",
  },
  {
    id: "refrigerant-impact",
    title: "Refrigerants and Environmental Impact",
    description:
      "Learn about fluorinated gases and their global warming potential through official reference data.",
    category: "Decarbonisation",
    source: "GOV.UK",
    url: "https://www.gov.uk/guidance/fluorinated-gases-f-gases",
    audience: "Everyone",
  },
  {
    id: "ventilation",
    title: "Improving Indoor Ventilation",
    description:
      "Practical guidance on fresh air, mechanical ventilation and maintaining healthy indoor environments.",
    category: "Health & Safety",
    source: "Health and Safety Executive",
    url: "https://www.hse.gov.uk/ventilation/how-to-improve-ventilation.htm",
    audience: "Everyone",
  },
  {
    id: "indoor-air",
    title: "Indoor Air Quality and Health",
    description:
      "Guidance on indoor air pollution, ventilation and reducing exposure to environmental pollutants.",
    category: "Health & Safety",
    source: "NICE",
    url: "https://www.nice.org.uk/guidance/ng149/chapter/Recommendations",
    audience: "Everyone",
  },
  {
    id: "ventilation-systems",
    title: "Workplace Ventilation Fundamentals",
    description:
      "Understand the principles of workplace ventilation and how to identify areas requiring improvement.",
    category: "Engineering",
    source: "Health and Safety Executive",
    url: "https://www.hse.gov.uk/ventilation/index.htm",
    audience: "Engineers",
  },
];