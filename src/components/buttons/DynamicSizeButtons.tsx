import React, { useState } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { Button, Divider, Flex, Radio } from 'antd'
import type { ConfigProviderProps } from 'antd'

type SizeType = ConfigProviderProps['componentSize']


const DynamicSizeButtons: React.FC = () => {
	const [size, setSize] = useState<SizeType>('large') // default is 'middle'
	return (
		<Flex vertical gap='large' style={{ alignItems: 'center' }}>
			<Radio.Group value={size} onChange={e => setSize(e.target.value)}>
				<Radio.Button value='large'>Large</Radio.Button>
				<Radio.Button value='default'>Default</Radio.Button>
				<Radio.Button value='small'>Small</Radio.Button>
			</Radio.Group>
			<Divider orientation='center' plain>
				Preview
			</Divider>
			<Flex gap='small' align='center' vertical>
				<Flex gap='small' wrap='wrap'>
					<Button type='primary' size={size}>
						Primary
					</Button>
					<Button size={size}>Default</Button>
					<Button type='dashed' size={size}>
						Dashed
					</Button>
				</Flex>
				<Button type='link' size={size}>
					Link
				</Button>
				<Flex gap='small' wrap='wrap'>
					<Button type='primary' icon={<DownloadOutlined />} size={size} />
					<Button
						type='primary'
						shape='circle'
						icon={<DownloadOutlined />}
						size={size}
					/>
					<Button
						type='primary'
						shape='round'
						icon={<DownloadOutlined />}
						size={size}
					/>
					<Button
						type='primary'
						shape='round'
						icon={<DownloadOutlined />}
						size={size}
					>
						Download
					</Button>
					<Button type='primary' icon={<DownloadOutlined />} size={size}>
						Download
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}
export default DynamicSizeButtons
