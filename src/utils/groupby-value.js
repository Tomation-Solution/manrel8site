export const getGroupedBy = (persons, key) => {
  let groups = {},
    result = [];
  persons.forEach((a) => {
    if (!(a[key] in groups)) {
      groups[a[key]] = [];
      result.push(groups[a[key]]);
    }
    groups[a[key]].push(a);
  });
  return result;
};

export const groupTrainings = (data) => {
  const mrc = [],
    mpdcl = [],
    others = [];

  data.forEach((item) => {
    if (item.training_type.toLowerCase() === "mrc") {
      mrc.push(item);
    } else if (item.training_type.toLowerCase() === "mpdcl") {
      mpdcl.push(item);
    } else {
      others.push(item);
    }
  });

  return [
    { group_name: "MPDCL", items: [...mpdcl] },
    { group_name: "MRC", items: [...mrc] },
    { group_name: "OTHERS", items: [...others] },
  ];
};
