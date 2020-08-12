import React from 'react';
import jsLogo from '../../public/img/js-logo.png';
import reactLogo from '../../public/img/react-logo.png';
import cssLogo from '../../public/img/css.svg';
import reduxLogo from '../../public/img/redux.png';
import webpackLogo from '../../public/img/webpack.png';
import gitLogo from '../../public/img/git.png';
import bootstrapLogo from '../../public/img/bootstrap_logo.png';

function About() {
	return (
		<div className="about_wrapper">
			<div className="about_section">
				<h2>About</h2>
				<div className="line" />
				<p className="about_description">
					Hi I'm Justin! I'm a Front End Developer with a passion for creating user-friendly websites and
					applications. I currently have a skillset specializing in HTML, CSS, and Javascript with other
					interests including React and Redux. In addition to my knowledge base, I continually seek new ways
					to improve as a developer and stay up-to-date with new technologies within the industry to deliver
					exceptional work.
				</p>
			</div>
			<div className="skill_section">
				<h2 className="skills">Skills</h2>
				<div className="line" />
				<ul>
					<li>
						<img className="skill_logo" src={jsLogo} />
						<p>Javascript</p>
					</li>
					<li>
						<img className="skill_logo" src={reactLogo} />
						<p>React</p>
					</li>
					<li>
						<img className="skill_logo" src={cssLogo} />
						<p>CSS3</p>
					</li>
					<li>
						<img className="skill_logo" src={reduxLogo} />
						<p>Redux</p>
					</li>
					<li>
						<img className="skill_logo" src={webpackLogo} />
						<p>Webpack</p>
					</li>
					<li>
						<img className="skill_logo" src={bootstrapLogo} />
						<p>Bootstrap</p>
					</li>
					<li>
						<img className="skill_logo" src={gitLogo} />
						<p>Git / Github</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default About;
