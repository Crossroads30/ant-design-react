import React from 'react'
import { Button, Flex } from 'antd'

const DangerButtons = () => {
  return (
		<Flex justify='center' wrap='wrap' gap='large'>
			<Button type='primary' danger>
				Primary
			</Button>
			<Button danger>Default</Button>
			<Button type='dashed' danger>
				Dashed
			</Button>
			<Button type='text' danger>
				Text
			</Button>
			<Button type='link' danger>
				Link
			</Button>
		</Flex>
	)
}
export default DangerButtons