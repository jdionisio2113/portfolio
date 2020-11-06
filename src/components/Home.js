import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="home-content">
			<div className="text">
				<h1 className="intro-line">Justin Dionisio</h1>
				<div className="line" />
				<h2 className="front-end">Front End Developer</h2>
				<div className="reference">
					<a href="https://github.com/jdionisio2113" target="_blank">
						<i className="fab fa-github fa-2x" />
					</a>
					<a href="https://www.linkedin.com/in/justin-dionisio-3014a2193/" target="_blank">
						<i className="fab fa-linkedin fa-2x" />
					</a>
					<a href="#" target="_blank">
						<i class="far fa-file-pdf fa-2x" />
					</a>
				</div>
				<button>
					<li>
						<Link to={'/projects'}>
							<p className="view_work">
								View my work
								<i className="fa fa-arrow-right" />
							</p>
						</Link>
					</li>
				</button>
			</div>
		</div>
	);
}

export default Home;
