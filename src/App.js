import { createRef, useState } from 'react';
import list from './itemlist.json'

function App() {

  const [itemlist, setItemlist] = useState(list)
  const [title, setTitle] = useState("All")

  itemlist.sort((a, b) => {
    if (a.Name < b.Name) { return -1 }
    if (a.Name > b.Name) { return 1 }
    return 0
  })

  const input = createRef()

  const type = [
    {
      name: "Utils",
      dim: "Utils"
    },
    {
      name: "Tickets",
      dim: "Tickets"
    },
    {
      name: "Master Rank",
      dim: "MR"
    },
    {
      name: "Guiding Lands",
      dim: "GL"
    },
    {
      name: "Low Rank",
      dim: "LR"
    },
    {
      name: "Hight Rank",
      dim: "HR"
    },
    {
      name: "Other",
      dim: "Other"
    },
    {
      name: "Master Rank Elders",
      dim: "MR Elders"
    },
    {
      name: "Decos",
      dim: "Decos"
    },
    {
      name: "Combi Decos",
      dim: "Combi Decos"
    },
    {
      name: "Trade-in",
      dim: "Trade-in"
    },
    {
      name: "Master Rank DLC",
      dim: "MR DLC"
    },
    {
      name: "Room Decor",
      dim: "Room Decor"
    }
  ]

  type.sort((a, b) => {
    if (a.name < b.name) { return -1 }
    if (a.name > b.name) { return 1 }
    return 0
  })

  const searchItem = function () {

    const item = document.querySelectorAll('.itemlist_item')

    for (let i = 0; i < itemlist.length; i++) {
      const textvalue = itemlist[i].Name
      if (textvalue.toUpperCase().indexOf(input.current.value.toUpperCase()) > -1) {
        item[i].style.display = ""
      }
      else {
        item[i].style.display = "none"
      }

    }
  }

  const filter = function (dim) {
    setItemlist(list.filter(w => w.Type === dim))
    input.current.value = ""
    searchItem()
    if(dim === ""){
      setTitle(`No type`)
    }
    else{
      setTitle(`${dim}`)
    }
  }

  const resetFilter = function () {
    setItemlist(list)
    setTitle('All')
    input.current.value = ""
    searchItem()
  }


  return (
    <div className="App">
      <main className="main_app">
        <form className="form_item-container">
          <input ref={input} onChange={() => searchItem()} placeholder={`Search in ${title}`} className="search_item" type="text"></input>
          <div className="search_ico"><i className="fas fa-search"></i></div>
        </form>
        <ul className="typeList">
          <li className="typeList-item"><button onClick={() => resetFilter()} className="typeList-item-button">All</button></li>
          {type.map((item, index) => {
            return (
              <li key={index} className="typeList-item"><button onClick={() => filter(item.dim)} className="typeList-item-button">{item.name}</button></li>
            )
          })}
          <li className="typeList-item"><button onClick={() => filter('')} className="typeList-item-button">No type</button></li>
        </ul>

        <div className="table_container">
          <h2 className="type-title">{title}</h2>
          <table className="table_itemlist">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
            {itemlist.map((item, index) => {
              return (
                <tr key={index} className="itemlist_item">
                  <td>{item.ItemID}</td>
                  <td>{item.Name}</td>
                  <td>{item.Type}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
