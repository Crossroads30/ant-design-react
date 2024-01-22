import React from 'react'

import { Space } from 'antd'

import styled from 'styled-components'
import Buttons from './buttons/Buttons'
import ButtonsIcons from './buttons/ButtonsIcons'
import DynamicSizeButtons from './buttons/DynamicSizeButtons'
import ButtonsDisabled from './buttons/ButtonsDisabled'
import ButtonsLoading from './buttons/ButtonsLoading'
import ButtonsMultiple from './buttons/ButtonsMultiple'
import GhostButton from './buttons/GhostButton'
import DangerButtons from './buttons/DangerButtons'
import BlockButton from './buttons/BlockButton'

const ButtonComponents: React.FC = () => (
	<Wrapper className='section section-center'>
		<Space direction='vertical' size='middle' style={{ display: 'flex' }}>
			<p>Buttons</p>
			<div className='div'>
				<Buttons />
			</div>
			<p>Buttons with icons</p>
			<div className='div'>
				<ButtonsIcons />
			</div>
			<p>Dynamic Size Buttons</p>
			<div className='div'>
				<DynamicSizeButtons />
			</div>
			<p>Disabled Buttons</p>
			<div className='div'>
				<ButtonsDisabled />
			</div>
			<p>Loading Buttons</p>
			<div className='div'>
				<ButtonsLoading />
			</div>
			<p>Multiple Buttons</p>
			<div className='div'>
				<ButtonsMultiple />
			</div>
			<p>Ghost Buttons</p>
			<div className='div'>
				<GhostButton />
			</div>
			<p>Danger Buttons</p>
			<div className='div'>
				<DangerButtons />
			</div>
			<p>Block Buttons</p>
			<div className='div'>
				<BlockButton />
			</div>
		</Space>
	</Wrapper>
)

const Wrapper = styled.section`
	padding: 3rem;
	p {
		color: var(--clr-grey-9);
	}
	.div {
		margin-bottom: 1rem;
		padding: 1rem;
		border: 1px solid white;
	}
`

export default ButtonComponents
