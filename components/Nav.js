import React from 'react';
import Link from 'next/link'

function Nav(props) {
	return (
		<nav>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
		</nav>
	);
}

export default Nav;
