import React from 'react'
import "./Profile.css";

export default function Profile() {
	return (
		<div className='profile-container'>
			<div className="profile-parent"> 
				<div className="profile-details">
					<div className='colz'>
						<div className="colz-icon">
							<a href='#'> 
							<img src="facebook.svg" alt="logo" />
							</a>
							<a href='#'> 
								<img src="facebook.svg"  alt="logo" />
							</a>
							<a href='#'> 
								<img src="facebook.svg"  alt="logo" />
							</a>
						</div>
					</div>
				
					<div className="profile-details-name">
						<span className="primary-text">
							{" "}
							Hello, I'M <span className="nom-text">Sarobidy</span>
						</span>
					</div>

				<div className="profile-details-role">
					<span className="primary-text">
						{" "}
						<h1>

						</h1 >
						<span className="profile-role-tagline">
							I'm a full stack developer based in Madagascar,
							 specialized in Javascript.
						</span>
					</span>
				</div> 
				<div className="profile-options">
					<button className="hire">
						{" "}
						Hire  Me{" "}
					</button>
					<a href="cv-sarobidy.pdf" download="cv-sarobidy.pdf">
						<button className="resume-btn">Get Resume</button>
					</a>
				</div>
			</div>

			<div className="profile-picture">
				<div className="profile-picture-background"> 

				</div>
			</div>
		</div>
	</div>  
	)
}