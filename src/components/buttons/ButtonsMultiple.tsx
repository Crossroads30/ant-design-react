import React from 'react'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Flex } from 'antd'

const onMenuClick: MenuProps['onClick'] = e => {
	console.log('click', e)
}

const items = [
	{
		key: '1',
		label: '1st item',
	},
	{
		key: '2',
		label: '2nd item',
	},
	{
		key: '3',
		label: '3rd item',
	},
]

const ButtonsMultiple: React.FC = () => {
	return (
		<Flex align='center' gap='large' vertical>
			<Button type='primary'>primary</Button>
			<Button>secondary</Button>
			<Flex>
				<Dropdown.Button menu={{ items, onClick: onMenuClick }}>
					Actions
				</Dropdown.Button>
			</Flex>
		</Flex>
	)
}
export default ButtonsMultiple
