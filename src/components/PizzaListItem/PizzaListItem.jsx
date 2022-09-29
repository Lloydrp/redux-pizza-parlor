function PizzaListItem({za}) {
  return (
    <div>
      <p>{za.name}</p>
      <img src={za.image_path} alt="Just a spicy pic of some za."/>
    </div>
  )
}

export default PizzaListItem;
