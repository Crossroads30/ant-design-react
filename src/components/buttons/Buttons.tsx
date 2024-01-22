import React from 'react'
import { Button, Flex, Tooltip } from 'antd'

const Buttons: React.FC = () => {
	return (
		<Flex gap='large' wrap='wrap' style={{justifyContent:'center'}}>
			<Button type='primary'>Primary Button</Button>
			<Button>Default Button</Button>
			<Button type='dashed'>Dashed Button</Button>
			<Button type='text'>Text Button</Button>
			<Button type='link'>Link Button</Button>
		</Flex>
	)
}
export default Buttons
