import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: 1,
      title: "Car Insurances",
      amount: 256.65,
      date: new Date(2023, 5, 11),
    },
    {
      id: 2,
      title: "Biznet",
      amount: 300,
      date: new Date(2023, 6, 11),
    },
    {
      id: 3,
      title: "Switch Online",
      amount: 100.2,
      date: new Date(2023, 7, 11),
    },
    {
      id: 4,
      title: "Youtube",
      amount: 50.5,
      date: new Date(2023, 8, 11),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
