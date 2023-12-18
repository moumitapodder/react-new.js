//all the packages of react js are intact into these folder.

import Card from "./components/Card";
import "./index.css";

// import Color from "./components/Color";

const productsData = [
  {
    id: 1,
    name: "shoe",
    desc: "o",
  },
  {
    id: 2,
    name: "lipstick",
    desc: "loremvm,dshvdsddsdsdbsdbkvdsbk",
  },
  {
    id: 3,
    name: "foundation",
    desc: "loremvm,dshdfdsfdfvbsdbkvdsbk",
  },
  {
    id: 4,
    name: "conciler",
    desc: "loremvm,dshfdsfsdfsfdsfvbsdbkvdsbk",
  },
  {
    id: 5,
    name: "conciler",
    desc: "loremvm,dshfdsfsdfsfdsfvbsdbkvdsbk",
  },
];

function App() {
  return (
    <>
      {/* <Color /> */}
      <div className="flex gap-8 border border-orange-500 p-4">
        {productsData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
