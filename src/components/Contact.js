import React from 'react';

function Contact() {
	return (
		<div className="contact-container">
			<h2>Contact</h2>
			<div className="line" />
			<ul>
				<li>
					<i className="fa fa-envelope fa-2x" />
					<p>justindionisio21@yahoo.com</p>
				</li>
				<li>
					<i className="fab fa-github fa-2x" />
					<a href="https://github.com/jdionisio2113" target="_blank">
						<p>github.com/jdionisio2113</p>
					</a>
				</li>
				<li>
					<i className="fab fa-linkedin fa-2x" />
					<a href="https://www.linkedin.com/in/jd2113//" target="_blank">
						<p>linkedin.com/in/jd2113</p>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Contact;
