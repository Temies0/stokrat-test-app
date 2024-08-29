import durev from '../images/base/durev.svg'
import kratcoin from '../images/base/kratcoin.svg'
import ton from '../images/base/ton.svg'
import tether from '../images/base/usdt_ton.svg'
import photo from '../images/test/photo.svg'
import './styles/ProfileCryptocurrencyScrollRight.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/scss'

const ProfileCryptocurrencyScrollRight = () => {
	return (
		<>
			<div className='profile-crypto-scroll-container'>
				<div className='inner-scrollbar-container'>
					<div className='profile-container'>
						<div className='profile-wrapper'>
							<img className='profile-image' src={photo} alt='You' />
							<p className='title-profile-balance'>Balance</p>
						</div>
					</div>
					<Swiper
						spaceBetween={4}
						slidesPerView={'auto'}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<div className='crypto-currency-wrapper'>
							<SwiperSlide>
								<div className='crypto-card kratcoin-card'>
									<img src={kratcoin} alt='kratcoin' className='crypto-image' />
									<p className='total-crypto-balance'>896</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='crypto-card ton-card'>
									<img src={ton} alt='ton' className='crypto-image' />
									<p className='total-crypto-balance'>2 545</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='crypto-card tether-card'>
									<img src={tether} alt='tether' className='crypto-image' />
									<p className='total-crypto-balance'>5 563.01</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='crypto-card durev-card'>
									<img src={durev} alt='durev' className='crypto-image' />
									<p className='total-crypto-balance'>7 563</p>
								</div>
							</SwiperSlide>
						</div>
					</Swiper>
				</div>
			</div >
		</>
	)
}

export default ProfileCryptocurrencyScrollRight
