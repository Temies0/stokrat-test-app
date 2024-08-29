import Kratcoin from '../images/base/kratcoin.svg'
import Copy from '../images/icons/copy.svg'
import GreenSquareDefaultBig from './buttons/GreenSquareDefault'
import './styles/ReferalLink.scss'

const ReferalLink = () => {
	return (
		<>
			<div className='referal-container'>
				<span className='reward-for-each-friend-wrapper'>
					<h1>100</h1>
					<img
						src={Kratcoin}
						alt='kratcoin'
						className='reward-kratcoin-for-each'
					/>
					<h1>for each friend!</h1>
				</span>
				<form action='' className='referal-form-container'>
					<div className='inner-referal-wrapper'>
						<form action='' className='referal-link-form'>
							<div className='referal-wrapper'>
								<p className='referal-title'>Referral Link</p>
								<p className='referal-link'>
									htttps://t.me/BoxTon_bot?start=2947
								</p>
							</div>
							<button type='button' className='button-copy'>
								<img src={Copy} alt='copy' className='copy-image' />
							</button>
						</form>
						<GreenSquareDefaultBig content='Open for FREE' />
					</div>
				</form>
			</div>
		</>
	)
}

export default ReferalLink
