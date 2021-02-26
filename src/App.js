import { createRef } from 'react';
import itemlist from './itemlist.json'

function App() {

  itemlist.sort((a, b) => {
    if(a.Name < b.Name) {return -1}
    if(a.Name > b.Name) {return 1}
    return 0
  })
  
  const input = createRef()

  const searchItem = function(){

    const item = document.querySelectorAll('.itemlist_item')

    for (let i = 0; i < itemlist.length; i++) {
      const textvalue = itemlist[i].Name
      if(textvalue.toUpperCase().indexOf(input.current.value.toUpperCase()) > -1){
        item[i].style.display = ""
      }
      else{
        item[i].style.display = "none"
      }
      
    }
  }

  return (
    <div className="App">
      <main className="main_app">
        <form className="form_item-container">
          <input ref={input} onChange={() => searchItem()} placeholder="Search Name" className="search_item" type="text"></input>
        </form>
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
      </main>
    </div>
  );
}

export default App;
