import React from 'react'
import { Button, Flex } from 'antd'

const GhostButton:React.FC = () => {
	return (
		<Flex justify='center' wrap='wrap' gap='large' className='site-button-ghost-wrapper'>
			<Button type='primary' ghost>
				Primary
			</Button>
			<Button ghost>Default</Button>
			<Button type='dashed' ghost>
				Dashed
			</Button>
			<Button type='primary' danger ghost>
				Danger
			</Button>
		</Flex>
	)
}
export default GhostButton
