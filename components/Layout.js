import Head from 'next/head';
import Nav from './Nav';

const Layout = (props) => (
	<>
		<Head>
			<title>Currency Exchange Rates</title>
			<link
				rel='icon'
				href='https://cdn3.iconfinder.com/data/icons/hotel-10-1/48/452-512.png'
			/>
		</Head>
		<div>
			<Nav />
			{props.children}
		</div>
	</>
);

export default Layout;
