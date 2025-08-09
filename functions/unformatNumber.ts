const unformatNumber = (str: string) => {
  if (!str) return 0;
  return Number(str.replace(/,/g, ''));
};

export default unformatNumber;
