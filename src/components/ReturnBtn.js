import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

const ReturnBtn = ({ parent = 'Telo' }) => {
	const navigate = useNavigate()
	return (
		<div className='links__controls row'>
			<div className='return flex-center' onClick={() => navigate(-1)}>
				<HiOutlineArrowNarrowLeft />
			</div>
			<h2>{parent}</h2>
		</div>
	)
}

export default ReturnBtn
