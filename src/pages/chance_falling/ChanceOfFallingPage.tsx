import GreenSquareDefaultBig from '../../globals/components/buttons/GreenSquareDefault.tsx'
import ChanceOfFallingFreeBox from '../../globals/components/ChanceOfFallingFreeBox'
import ProfileCryptocurrencyScrollRight from '../../globals/components/ProfileCryptocurrencyScrollRight'
import WhatInsideTheBox from '../../globals/components/WhatInsideTheBox.tsx'
import './styles/ChanceOfFalling.scss'

const ChanceOfFallingPage = () => {
	return (
		<>
			<ProfileCryptocurrencyScrollRight />
			<ChanceOfFallingFreeBox />
			<WhatInsideTheBox />
			<footer className='chance-footer'>
				<div className='green-footer-button'>
					<GreenSquareDefaultBig content='Open for FREE' />
				</div>
			</footer>
		</>
	)
}

export default ChanceOfFallingPage
