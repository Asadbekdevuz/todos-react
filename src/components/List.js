import Item from "./Item";

export default function List({todos}) {
  console.log(todos);
  return (
    <>
      <ol className="form__list text-white" >
       {todos.map((todo ,i ) => <Item {...todo} key={i} />)}
      </ol>
    </>
  )
}