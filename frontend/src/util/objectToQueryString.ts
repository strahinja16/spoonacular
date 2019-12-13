export default (obj: object) => {
  return (
    '?' +
    Object.keys(obj)
      .reduce((acc, curr) => {
        if ((obj as any)[curr] !== '') {
          acc = `${acc}&${curr}=${(obj as any)[curr]}`;
        }
        return acc;
      }, '')
      .substring(1)
  );
};
