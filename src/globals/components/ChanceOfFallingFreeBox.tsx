import FreeBox from '../images/base/main_box_back.svg'
import './styles/ChanceOfFallingFreeBox.scss'

const ChanceOfFallingFreeBox = () => {
	return (
		<>
			<div className="chance-of-falling-free-box">
				<img src={FreeBox} alt="freebox" className="box-image-chance" />
				<h2 className="name-box-title">Free Box</h2>
			</div>
		</>
	)
}

export default ChanceOfFallingFreeBox