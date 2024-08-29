import Telegram from '../images/icons/socials/telegram.svg' // props
import X from '../images/icons/socials/x.svg'
import YouTube from '../images/icons/socials/youtube.svg' // props
import './styles/AllTasks.scss'
import TaskSubOnX from './TaskSubOnX'

const AllTasks = () => {
	return (
		<>
			<div className='all-tasks-container'>
				<h1 className='all-tasks-title'>All tasks</h1>
				<TaskSubOnX src={X} />
				<TaskSubOnX src={Telegram} />
				<TaskSubOnX src={YouTube} />
			</div>
		</>
	)
}

export default AllTasks
