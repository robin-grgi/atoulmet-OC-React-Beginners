import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem"
import "../styles/ShoppingList.css"

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className="lmj-plant-list">
				{plantList.map(({name, cover, id, light, water, isBestSale}) => (
					<PlantItem
						name={name} 
						cover={cover} 
						id={id} 
						light={light} 
						water={water} 
						isBestSale={isBestSale}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
