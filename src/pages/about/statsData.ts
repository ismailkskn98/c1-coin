interface StatsItem {
  id: number;
  value: number;
  unit?: string;
  translationKey: string;
}

export const statsData: StatsItem[] = [
  {
    id: 1,
    value: 50,
    unit: "$",
    translationKey: "aboutPage.stats.revenue",
  },
  {
    id: 2,
    value: 150,
    translationKey: "aboutPage.stats.clients",
  },
  {
    id: 3,
    value: 20,
    unit: "%",
    translationKey: "aboutPage.stats.noBorders",
  },
  {
    id: 4,
    value: 10,
    unit: "x",
    translationKey: "aboutPage.stats.speed",
  },
];
