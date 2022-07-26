export const parseNumbers = (data: string) => {
  return data.split(',').map((el) => parseInt(el));
};

export const parseArrays = (data: string) => {
  const allMassives = data.split(/\s\n/);
  const subMassives = allMassives.map((el) =>
    el.split(/\n/).map((element) =>
      element
        .trim()
        .split(/\s+/)
        .map((elem) => parseInt(elem)),
    ),
  );
  return subMassives;
};
