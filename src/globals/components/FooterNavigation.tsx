import Earn from '../images/additional/earn.svg'
import MenuBox from '../images/additional/menu_box.svg'
import MenuFriends from '../images/additional/menu_friends.svg'
import MenuTasks from '../images/additional/menu_tasks.svg'
import Roulette from '../images/additional/roulette.svg'
import './styles/FooterNavigation.scss'

const FooterNavigation = () => {
	return (
		<>
			<div className='footer-navigation-container'>
				<div className='inner-footer-navigation-container'>
					<div className='button-navigation active-button-navigation'>
						<img src={Earn} alt='earn' className='footer-icon' />
						<p className='footer-title'>Earn</p>
					</div>
					<div className='button-navigation'>
						<img src={Roulette} alt='roulette' className='footer-icon' />
						<p className='footer-title'>Spin</p>
					</div>
					<div className='button-navigation'>
						<img src={MenuBox} alt='boxes' className='footer-icon' />
						<p className='footer-title'>Boxes</p>
					</div>
					<div className='button-navigation'>
						<img src={MenuFriends} alt='friends' className='footer-icon' />
						<p className='footer-title'>Friends</p>
					</div>
					<div className='button-navigation'>
						<img src={MenuTasks} alt='tasks' className='footer-icon' />
						<p className='footer-title'>Tasks</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default FooterNavigation
