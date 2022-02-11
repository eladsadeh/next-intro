import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

const Index = () => (
	<Layout>
		<h1>First Next App!</h1>
	</Layout>
);

Index.getInitialProps = async () => {
	const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
	const data = await res.json();
	return {
		data: data,
	};
};

export default Index;
