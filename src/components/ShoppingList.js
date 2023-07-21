import { plantList } from '../datas/plantList'

function ShoppingList() {
	return (
		<div>
			<ul>
				{
					plantList.reduce(
						(acc, plant) =>
							acc.includes(plant.category) ? acc : acc.concat(plant.category),
						[]
					).map((cat) => (
						<li key={cat}>{cat}</li>
					))
				}
			</ul>

			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name} ({plant.category})</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
