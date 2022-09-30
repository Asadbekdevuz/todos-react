import { useState } from "react";
import List from "./List";
import "./todo.scss";


function Todo() {

  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  
  function addItem(evt){
    evt.preventDefault();

    let obj = {
      name: value,
    }

    setTodo([...todo, obj]);
    setValue("")

  }


  return (
    <>
      <h1 className="visually-hidden">Food market</h1>
      <div className="container">
        <div className="content d-flex flex-column">
          <div className="content__left ">
            <form className="form pt-5 text-center w-50 mx-auto" onSubmit={addItem}>
              <div className="mb-3">
                <label className="form__label mb-2 fs-4 text-white" htmlFor="form__label">Mahsulot nomini kiriting!</label>
                <input className="form__input form-control" type="text" id="label__input" autoComplete="off" required
                  placeholder="Non, tarvuz" value={value} onChange={(e) => setValue(e.target.value)} />
                <div id="emailHelp" className="form-text text-white">Iltimos, tanlagan mahsulotingizni kiriting!</div>
              </div>
              <div>
                <button type="submit" className="btn btn-primary mb-1 mb-sm-0">Savatga qo'shish</button>
                <a className="btn btn-primary ms-2" href="index.html">Savatni yangilash</a>
              </div>
            </form>
          </div>


          <div className="content__right d-flex mx-auto">
            <List todos={todo}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo;