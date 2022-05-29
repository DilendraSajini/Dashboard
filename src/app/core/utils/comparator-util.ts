export const comparator = (prev: any, curr: any) => {
  return (JSON.stringify(prev) === JSON.stringify(curr));
};
