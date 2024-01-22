import React from 'react'
import { Layout, Flex } from 'antd'
import ButtonComponents from './components/ButtonComponents'
import './index.css'

const { Header, Footer, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	minHeight: '5rem',
	paddingInline: 48,
	lineHeight: '64px',
	backgroundColor: '#4096ff',
}

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 'calc(100vh - 10rem)',
	lineHeight: '120px',
	color: 'var(--clr-grey-9)',
	backgroundColor: 'var(--clr-teal-light)',
	padding: '5rem 0',
}

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#4096ff',
	minHeight: '5rem',
}

const layoutStyle = {
	overflow: 'hidden',
	width: '95vw',
	maxWidth: '60vw',
}

const App: React.FC = () => {
	return (
		<Flex justify='center'>
			<Layout style={layoutStyle}>
				<Header style={headerStyle}>Header</Header>
				<Content style={contentStyle}>
					<ButtonComponents />
				</Content>
				<Footer style={footerStyle}>Footer</Footer>
			</Layout>
		</Flex>
	)
}
export default App
