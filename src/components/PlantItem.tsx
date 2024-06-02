import CareScale from "./CareScale";

import "../styles/PlantItem.css";

function PlantItem({ name, cover, id, light, water, isBestSale }) {
	return (
		<li key={id} className="lmj-plant-item">
			<img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
			{isBestSale && <span>🔥</span>}
			{name}
			<CareScale careType="water" scaleValue={water} />
			<CareScale careType="light" scaleValue={light} />
		</li>
	);
}
export default PlantItem;