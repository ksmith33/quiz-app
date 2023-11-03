import './section.styles.scss';

function Section ({ children, areaName }) {
	return (
		<section className={`section-container ${areaName}`}>
			{ children }
		</section>
	)
}

export default Section;