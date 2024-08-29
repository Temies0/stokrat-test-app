import { useEffect } from 'react'
import FooterNavigation from '../../globals/components/FooterNavigation'
import ProfileCryptocurrencyScrollRight from '../../globals/components/ProfileCryptocurrencyScrollRight'
import TapForFreeBoxCircle from '../../globals/components/TapForFreeBoxCircle'
import TaskSubOnX from '../../globals/components/TaskSubOnX'
import X from '../../globals/images/icons/socials/x.svg'
import './styles/Main.scss'

const MainPage = () => {
	useEffect(() => {
		document.body.classList.add('main-body')
	}, [])
	return (
		<>
			<ProfileCryptocurrencyScrollRight />
			<div className='container'>
				<TapForFreeBoxCircle />
			</div>
			<footer>
				<div className='task-sub'>
					<TaskSubOnX src={X} />
				</div>
				<FooterNavigation />
			</footer>
		</>
	)
}

export default MainPage
