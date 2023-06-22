import styled from 'styled-components'

const ProgressBar = ({ percent = 12 }) => {
	return (
		<div data-testid="wrapper">
			<div data-testid="progress" />
		</div>
	)
}

export default ProgressBar
