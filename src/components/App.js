import ArrayData from "./ArrayData";


function App() {
  const ArrD = [
    {id: 1, title: 'Grill', price:'25'},
    {id: 2, title: 'Pfanne', price:'15'},
    {id: 3, title: 'Topf', price:'10'}
  ]
  
  return (
    <div>
    {ArrD.map(item => <ArrayData key={item.id} {...item}/>)}
    </div>
  );
  
}

export default App;
