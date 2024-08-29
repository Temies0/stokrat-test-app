import Kratcoin from '../images/base/kratcoin.svg'
import './styles/TaskSubOnX.scss'

interface TaskSubOnXProps {
	src: string
}

const TaskSubOnX: React.FC<TaskSubOnXProps> = ({ src }) => {
	const check: string = 'Check'
	const claim: string = 'Claim'

	const onClaim = () => {
		const buttonState = document.querySelector('.button-state')
		if (buttonState) {
			buttonState.textContent = claim
		}
	}
	return (
		<>
			<div className='task-list-container'>
				<form action='' className='task-list-form'>
					<div className='inner-task-list'>
						<div className='social-image-container'>
							<img src={src} alt='social icon' className='social-image' />
						</div>
						<div className='task-list-wrapper'>
							<p className='task-title'>Subscribe on X</p>
							<div className='reward-wrapper'>
								<img
									src={Kratcoin}
									alt='kratcoin'
									className='reward-currency'
								/>
								<p className='reward-quantity'>+100</p>
							</div>
						</div>
						<button type='button' onClick={onClaim} className='button-state'>
							{check}
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default TaskSubOnX
