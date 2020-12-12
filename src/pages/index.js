import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Landing template for startups"
				content="Our landing page template works for all the devices, so you only have to setup it once, and get beautiful results forever."
				illustration={HeroIllustration}
			/>
		</Layout>
	);
}
