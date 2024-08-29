import './styles/GreenSquareDefault.scss'

interface buttonContent {
	content: string
}

const GreenSquareDefaultBig: React.FC<buttonContent> = ({ content }) => {
	return (
		<>
			<button type='button' className='green-square-default-big'>
				<div className='green-square-default-big-content'>{content}</div>
			</button>
		</>
	)
}

export default GreenSquareDefaultBig
