export const columnsHistory = [
  {
    dataIndex: "key",
  },
  {
    title: "Дата и время",
    dataIndex: "time",
  },
  {
    title: "Сумма вывода",
    dataIndex: "sum",
  },
  {
    title: "Статус операции",
    dataIndex: "status",
  },
];

export const data = () => {
  const test =[];
  for (let i = 1; i <= 100; i++) {
    test.push({
      key: i,
      time: `Edward King ${i}`,
      sum: 32,
      status: `London, Park Lane no. ${i}`,
    });
  }
  return test;
};
