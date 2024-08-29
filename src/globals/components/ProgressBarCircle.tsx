import React from 'react'
import './styles/ProgressBarCircle.scss'

interface ProgressBarCircleProps {
	progress: number // Значение от 0 до 1, например, 0.8 для 80%
	size?: number // Диаметр круга
	strokeWidth?: number // Толщина линии прогресса
	color?: string // Цвет линии прогресса
	backgroundColor?: string // Цвет фона круга
}

const ProgressBarCircle: React.FC<ProgressBarCircleProps> = ({
	progress,
	size = 100,
	strokeWidth = 9,
	color = '#A7E92F',
	backgroundColor = '#DCFBA2',
}) => {
	const center = size / 2
	const radius = center - strokeWidth / 2
	const circumference = 2 * Math.PI * radius
	const offset = circumference - progress * circumference

	return (
		<svg className='progress-circle-container' width={size} height={size}>
			{/* Фоновый круг */}
			<circle
				cx={center}
				cy={center}
				r={radius}
				strokeWidth={strokeWidth}
				stroke={backgroundColor}
				fill='#F0FBDA'
			/>
			{/* Круг прогресса */}
			<circle
				cx={center}
				cy={center}
				r={radius}
				strokeWidth={strokeWidth}
				stroke={color}
				fill='none'
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				strokeLinecap='round'
				style={{ transition: 'stroke-dashoffset 0.5s ease' }}
				transform={`rotate(-90 ${center} ${center})`} // Поворот круга на 90 градусов
			/>
			<text
				x='50%'
				y='50%'
				dominantBaseline='middle'
				textAnchor='middle'
				className='progress-circle-text'
			>{`${Math.round(progress * 5)}/5`}</text>
		</svg>
	)
}

export default ProgressBarCircle
