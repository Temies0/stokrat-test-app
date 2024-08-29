import KratBox from '../images/base/krat_box.svg'
import GreenSquareDefaultSmall from './buttons/GreenSquareDefaultSmall'
import ProgressBarCircle from './ProgressBarCircle'
import './styles/ProgressTask.scss'

const ProgressTask: React.FC = () => {
	const progress = 0
	return (
		<>
			<div className='box-task-list'>
				<div className='box-task-list-inner-container'>
					<img
						src={KratBox}
						alt='Kratcoin Box'
						className='reward-for-tasks-image'
					/>
					<p className='task-title'>Complete 5 any tasks to get a Free Box</p>
					{progress < 1 ? (
						<ProgressBarCircle progress={progress} size={64} />
					) : (
						<GreenSquareDefaultSmall />
					)}
				</div>
			</div>
		</>
	)
}

export default ProgressTask
