import { useEffect, useState } from 'react'
import './styles/TapForFreeBoxCircle.scss'

const TapForFreeBoxCircle = () => {
	// Состояния для counter и таймера
	const [counter, setCounter] = useState<number>(() => {
		const savedCounter = localStorage.getItem('counter')
		return savedCounter ? Number(savedCounter) : 1000
	})
	const [timer, setTimer] = useState<number>(() => {
		const savedTime = localStorage.getItem('timer')
		const savedTimestamp = localStorage.getItem('timestamp')

		if (savedTime && savedTimestamp) {
			const elapsedTime = Math.floor(
				(Date.now() - Number(savedTimestamp)) / 60000
			) // Разница в минутах
			return Math.max(Number(savedTime) - elapsedTime, 0)
		}

		return 359 // 5 часов 59 минут в минутах
	})
	const [isCountingDown, setIsCountingDown] = useState<boolean>(counter === 0)

	// Обновление localStorage при изменении counter
	useEffect(() => {
		localStorage.setItem('counter', counter.toString())
	}, [counter])

	// Обновление localStorage при изменении timer и timestamp
	useEffect(() => {
		localStorage.setItem('timer', timer.toString())
		localStorage.setItem('timestamp', Date.now().toString())
	}, [timer])

	// Обработчик кликов
	const handleClick = () => {
		if (counter > 0) {
			setCounter(counter - 1)
		}
	}

	// Эффект для запуска таймера, когда счетчик достигает 0
	useEffect(() => {
		if (counter === 0 && timer > 0) {
			setIsCountingDown(true)
			const timerInterval = setInterval(() => {
				setTimer((prevTimer) => {
					if (prevTimer <= 0) {
						clearInterval(timerInterval)
						resetTapCycle()
						return 0
					}
					return prevTimer - 1
				})
			}, 60000) // Таймер обновляется каждые 60 секунд (1 минута)
			return () => clearInterval(timerInterval)
		}
	}, [counter, timer])

	// Эффект для управления классом tap-content
	useEffect(() => {
		const tapContentElement = document.getElementById('tap-content')
		if (tapContentElement) {
			if (isCountingDown) {
				tapContentElement.classList.remove('tap-content')
			} else {
				tapContentElement.classList.add('tap-content')
			}
		}
	}, [isCountingDown])

	// Функция сброса цикла по истечении таймера
	const resetTapCycle = () => {
		setIsCountingDown(false)
		setCounter(1000)
		setTimer(359) // 5 часов 59 минут в минутах
	}

	// Форматирование времени в H:MM
	const formatTime = (time: number) => {
		const hours = Math.floor(time / 60)
		const minutes = time % 60
		return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
	}

	return (
		<div
			id='tap-for-free-box-container'
			className={`tap-for-free-box-container ${counter === 0 ? '' : 'active'}`}
		>
			<div
				id='tap-content'
				className={`${counter === 0 ? '' : 'tap-content'}`}
				onClick={handleClick}
			>
				<button className='boxcoin' disabled={counter === 0}></button>
				<p
					className='counter'
					style={{ display: isCountingDown ? 'none' : 'flex' }}
				>
					{counter.toLocaleString()}
				</p>
				<p
					className='timer'
					style={{ display: isCountingDown ? 'flex' : 'none' }}
				>
					{formatTime(timer)}
				</p>
			</div>
		</div>
	)
}

export default TapForFreeBoxCircle
