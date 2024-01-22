import React, { useState } from 'react'
import { PoweroffOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'

const ButtonsLoading: React.FC = () => {
	const [loadings, setLoadings] = useState<boolean[]>([])

	const enterLoading = (index: number) => {
		setLoadings(prevLoadings => {
			const newLoadings = [...prevLoadings]
			newLoadings[index] = true
			return newLoadings
		})

		setTimeout(() => {
			setLoadings(prevLoadings => {
				const newLoadings = [...prevLoadings]
				newLoadings[index] = false
				return newLoadings
			})
		}, 6000)
	}

	return (
		<Flex gap='large' vertical style={{ alignItems: 'center' }}>
			<Flex gap='small' align='center' wrap='wrap'>
				<Button type='primary' loading>
					Loading
				</Button>
				<Button type='primary' size='small' loading>
					Loading
				</Button>
				<Button type='primary' icon={<PoweroffOutlined />} loading />
			</Flex>
			<Flex gap='small' wrap='wrap'>
				<Button
					type='primary'
					loading={loadings[0]}
					onClick={() => enterLoading(0)}
				>
					Click me!
				</Button>
				<Button
					type='primary'
					icon={<PoweroffOutlined />}
					loading={loadings[1]}
					onClick={() => enterLoading(1)}
				>
					Click me!
				</Button>
				<Button
					type='primary'
					icon={<PoweroffOutlined />}
					loading={loadings[2]}
					onClick={() => enterLoading(2)}
				/>
			</Flex>
		</Flex>
	)
}
export default ButtonsLoading