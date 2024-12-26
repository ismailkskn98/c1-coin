interface StatsItem {
  id: number;
  value: number;
  unit?: string;
  description: string;
}

export const statsData: StatsItem[] = [
  {
    id: 1,
    value: 50,
    unit: "$",
    description: "bilion USD as expected revenue coins by 2020",
  },
  {
    id: 2,
    value: 150,
    description: "milion potential clients worldwide",
  },
  {
    id: 3,
    value: 20,
    unit: "%",
    description: "no borders for international payments",
  },
  {
    id: 4,
    value: 10,
    unit: "x",
    description: "faster transaction speed",
  },
];
