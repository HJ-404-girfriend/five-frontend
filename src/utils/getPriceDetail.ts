export const getPriceProps = (price: number) => {
  if (price > 0 && price < 10000) return { text: '천원대', color: '--price-level-0' };
  if (price >= 10000 && price < 20000) return { text: '1만원대', color: '--price-level-1' };
  if (price >= 20000 && price < 30000) return { text: '2만원대', color: '--price-level-2' };
  if (price >= 30000 && price < 40000) return { text: '3만원대', color: '--price-level-3' };
  if (price >= 40000 && price < 50000) return { text: '4만원대', color: '--price-level-4' };
  if (price >= 50000 && price < 60000) return { text: '5만원대', color: '--price-level-5' };
  return { text: '', color: '' };
};
