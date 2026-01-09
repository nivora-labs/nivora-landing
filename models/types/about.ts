export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutDiagram {
  centerText: string;
  steps: string[];
  footnote: string;
}

export interface AboutContent {
  title: string;
  button: string;
  stats: AboutStat[];
  diagram: AboutDiagram;
}

