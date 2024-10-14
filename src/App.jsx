import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "farhan",
    },

    {
      id: 2,
      name: "dipto",
    },
    {
      id: 3,
      name: "Nishan",
    },
    {
      id: 4,
      name: "Bunny",
    },
  ]);

  var dragPerson = 0;
  var overDragPerson = 0;
  function Test() {
    var peopleClone = [...people];
    var temp = peopleClone[dragPerson];
    peopleClone[dragPerson] = peopleClone[overDragPerson];
    peopleClone[overDragPerson] = temp;

    setPeople(peopleClone);
  }
  return (
    <main>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        People
      </h1>
      {people.map(function (item, index) {
        return (
          <div
            key={index}
            className="list"
            draggable
            onDragStart={function () {
              dragPerson = index;
            }}
            onDragEnter={function () {
              overDragPerson = index;
            }}
            onDragEnd={Test}
            onDragOver={(e) => e.preventDefault()}
          >
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </main>
  );
}

export default App;
