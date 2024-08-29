import AllTasks from '../../globals/components/AllTasks'
import FooterNavigation from '../../globals/components/FooterNavigation'
import ProfileCryptocurrencyScrollRight from '../../globals/components/ProfileCryptocurrencyScrollRight'
import ProgressTask from '../../globals/components/ProgressTask'
import ReferalLink from '../../globals/components/ReferalLink'
import './styles/Tasks.scss'

const TasksPage = () => {
	return (
		<>
			<ProfileCryptocurrencyScrollRight />
			<main className='tasks-main-container'>
				<ProgressTask />
				<AllTasks />
				<ReferalLink />
			</main>
			<footer>
				<FooterNavigation />
			</footer>
		</>
	)
}

export default TasksPage
