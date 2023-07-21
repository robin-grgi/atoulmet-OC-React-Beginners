import { plantList } from '../datas/plantList'

function ShoppingList() {
	return (
		<div>
			<ul>
				{
					plantList.map((plant) => (plant.category)).reduce((accumulator, currentValue) => {
						if (accumulator.includes(currentValue)) {
							return accumulator
						} else {
							return [...accumulator, currentValue]
						}
					}
						, []).map((category) => (
							<li key={category}>{category}</li>
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
