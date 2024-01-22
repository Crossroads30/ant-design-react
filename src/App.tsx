import React from 'react'

import { Space } from 'antd'

import styled from 'styled-components'
import Buttons from './components/Buttons'
import ButtonsIcons from './components/ButtonsIcons'
import DynamicSizeButtons from './components/DynamicSizeButtons'
import ButtonsDisabled from './components/ButtonsDisabled'
import ButtonsLoading from './components/ButtonsLoading'
import ButtonsMultiple from './components/ButtonsMultiple'
import GhostButton from './components/GhostButton'
import DangerButtons from './components/DangerButtons'
import BlockButton from './components/BlockButton'

const App: React.FC = () => (
	<Wrapper className='section'>
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

const Wrapper = styled.main`
	padding: 3rem;
	.div {
		margin-bottom: 1rem;
		padding: 1rem;
		border: 1px solid white;
	}
`

export default App
