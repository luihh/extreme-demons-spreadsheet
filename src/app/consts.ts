export const CELL_COLORS: { [key: string]: string } = {
  TRUE: 'bg-green-400 text-green-900',
  FALSE: 'bg-red-400 text-red-900',
  ONGOING: 'bg-yellow-400 text-yellow-900',
};

export const TEXT_COLORS = {
  CYAN: 'text-cyan-400',
  GREEN: 'text-green-400',
  YELLOW: 'text-yellow-400',
  RED: 'text-red-400',
};

export const RATING_THRESHOLDS: { [key: string]: number[] } = {
  ENJOYMENT: [11, 8, 5],
  WORST_FAIL: [80, 60],
};
