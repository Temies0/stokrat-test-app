import Durev from '../images/base/durev.svg'
import Notcoin from '../images/base/notcoin.svg'
import Ton from '../images/base/ton.svg'
import './styles/WhatInsideTheBox.scss'

const WhatInsideTheBox = () => {
	return (
		<>
			<div className="what-inside-the-box-container">
				<h1 className="what-inside-title">
					What inside the box
				</h1>
				<div className="what-inside-lists">
					<ul>
						<li className="box-content-list">
							<div className="box-content-container">
								<img src={Ton} alt="Toncoin" className="box-content-icon" />
								<p className="box-content-name-title">Toncoin</p>
							</div>
							<div className="box-content-quantity-container">
								<p className="box-content-quantity">1 — 100</p>
							</div>
						</li>
						<li className="box-content-list">
							<div className="box-content-container">
								<img src={Durev} alt="Durev" className="box-content-icon" />
								<p className="box-content-name-title">Durev</p>
							</div>
							<div className="box-content-quantity-container">
								<p className="box-content-quantity">10 — 250</p>
							</div>
						</li>
						<li className="box-content-list">
							<div className="box-content-container">
								<img src={Notcoin} alt="Notcoin" className="box-content-icon" />
								<p className="box-content-name-title">Notcoin</p>
							</div>
							<div className="box-content-quantity-container">
								<p className="box-content-quantity">500 — 1000</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default WhatInsideTheBox
