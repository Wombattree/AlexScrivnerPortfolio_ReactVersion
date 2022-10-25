import React from 'react';

export default function Resume() 
{
  function ToggleDrawer(event)
  {
    event.preventDefault();
    if (event.target.classList.contains("drawer")) event.target.classList.toggle("drawerOpen");
      
  }

  return (
    <div>
		<section className="section">
			<div className="columns is-mobile is-centered">
				<div className="column is-three-quarters">
					<div className="container is-vcentered">
						<div className="card mt-6">
							<div className="card-content">
								<div className="content">
									<h1>Resume</h1>
									<ul>
                    <p><b>Address:</b> 13 Wallis Street Parkside, SA 5063</p>
                    <p><b>Phone:</b> 0434 114 662</p>
                    <p><b>Email:</b> awombattree@gmail.com</p>
                  </ul>

                  <div className="drawer" onClick={ToggleDrawer}>
                  <h2>Technologies</h2>
                  <ul>
                    <h3 className="is-size-5"><b>HTML</b></h3>
                    <ul>
                      <li><p>Handlebars</p></li>
                    </ul>

                    <h3 className="is-size-5"><b>CSS</b></h3>
                    <ul>
                      <li><p>Bootstrap</p></li>
                      <li><p>Bulma</p></li>
                    </ul>

                    <h3 className="is-size-5"><b>Javascript</b></h3>
                    <ul>
                      <li><p>MERN Stack</p></li>
                      <li><p>Node.js</p></li>
                      <li><p>Express.js</p></li>
                      <li><p>React</p></li>
                      <li><p>Progressive Web Applications</p></li>
                      <li><p>Jest</p></li>
                      <li><p>Chart.js</p></li>
                    </ul>
                    
                    <h3 className="is-size-5"><b>Databases</b></h3>
                    <ul>
                      <li><p>MySql</p></li>
                      <ul>
                        <li>
                          <p>Sequelize</p>
                        </li>
                      </ul>
                      <li><p>MongoDB</p></li>
                      <ul>
                        <li>
                          <p>Mongoose</p>
                        </li>
                      </ul>
                    </ul>

                    <h3 className="is-size-5"><b>C#</b></h3>
                    <ul>
                      <li><p>Unity</p></li>
                    </ul>

                    <h3 className="is-size-5"><b>Other</b></h3>
                    <ul>
                      <li><p>GitHub</p></li>
                      <li><p>HLSL</p></li>
                    </ul>
                  </ul>
                  </div>

                  <div className="drawer" onClick={ToggleDrawer}>
                  <h2>Work Experience</h2>
                  <ul>
                    <li>
                      <h3 className="is-size-5"><b>Woolworths</b> — Service cashier</h3>
                      <p className="is-size-7">2012 - 2016</p>
                    </li>

                    <li>
                      <h3 className="is-size-5"><b>Annesley Junior School</b> — Library and School Shop Assistant</h3>
                      <p className="is-size-7">2019 - 2020</p>
                      <p>Library Assistant</p>
                      <p>Responsibilities included re-organising the library, shelving returns, cataloguing new resources, updating the library’s data into a new IT system and supporting students and teachers with inquiries and reserving loans. </p>
                      <p>Shop Assistant</p>
                      <p>I organised and managed the school uniform shop, as the shop was a new service to the Annesley School community I was instrumental in improving the services and efficiency of the operations. I was also responsible for keeping track of inventory levels, auditing stock  and providing customer service to both parents and staff.</p>
                    </li>

                    <li>
                      <h3 className="is-size-5"><b>Adelaide Parcel Delivery</b> — Data Integrity and Customer Service</h3>
                      <p className="is-size-7">2021 - 2022</p>
                      <p>Data Integrity</p>
                      <p>I am in charge of processing the proof of deliveries (PODs) that we receive from the delivery drivers. These proofs are required for the company to charge our customers so it is a role that requires attention to detail and accuracy. I am continually looking to improve the efficiency of the role and am currently working on assisting the company in setting up a machine learning program to reduce the need for manual data entry.</p>
                      <p>Customer Service</p>
                      <p>As part of my role I also assist customers with their POD related inquiries, and manage the front desk for any customers that would like to pick up their parcels from our depot.</p>
                    </li>
                  </ul>
                  </div>

                  <div className="drawer" onClick={ToggleDrawer}>
                  <h2>Education</h2>
                  <ul>
                    <li>
                      <h3 className="is-size-5"><b>Pembroke School</b></h3>
                      <p className="is-size-7">2001 - 2014</p>
                    </li>

                    <li>
                      <h3 className="is-size-5"><b>CDW</b>, Digital Art School</h3>
                      <p className="is-size-7">2015 - 2018</p>
                      <p>At CDW I studied character design for video games and film using Photoshop, learning both artistic skills and improving my ability to work collaboratively with others on projects.</p>
                    </li>

                    <li>
                      <h3 className="is-size-5"><b>Adelaide Uni Full Stack Web Development Bootcamp</b></h3>
                      <p className="is-size-7">2022</p>
                      <p>A six month bootcamp in which we learnt about full stack web development, covering most of the techlogies listed under the technologies section, including Javascript, Node.js, React, MongoDB and many more.</p>
                    </li>
                  </ul>
                  </div>

                  <div className="drawer" onClick={ToggleDrawer}>
                  <h2>Skills</h2>
                  <ul>
                    <li>
                      <h3 className="is-size-5"><b>Quick learner</b></h3>
                      <p>I’m adept at learning new skills and improving upon old ones, particularly when those skills involve technology. In my spare time I’m currently creating a video game, both the programming and graphics,  and I’m achieving this by learning several new programs, including Blender, Substance Painter, and Unity. I am efficient at learning both with assistance and independently.</p>
                    </li>

                    <li>
                      <h3 className="is-size-5"><b>IT proficiency</b></h3>
                      <p>My experience with technology also includes using library software as well as basic programs such as word and excel. I also have a hobbyist level of C# knowledge through time spent creating video games using Unity.</p>
                    </li>

                    <li>
                      <h3 className="is-size-5"><b>Work Ethic</b></h3>
                      <p>I am a punctual person, I use my work time efficiently  as I can visualise problems effectively in order to prioritise the important elements of a task. I am also confident in my ability to work independently with little oversight when needed.</p>
                    </li>
                  </ul>
                  </div>

                  <div className="drawer" onClick={ToggleDrawer}>
                  <h2>References</h2>
                  <ul>
                    <li>
                      <h3 className="is-size-5"><b>Alexandra McCole</b></h3>
                      <p>Business Manager, Annesley Junior School</p>
                      <p>Phone: 8422 2288</p>
                      <p>Email: mccolea@annesley.sa.edu.au</p>
                    </li>

                    <li>
                      <h3 className="is-size-5"><b>Alexandra Williamson</b></h3>
                      <p>Bulk Deliveries Manager, APD</p>
                      <p>Phone: 0413 265 695</p>
                      <p>Email: alla.williamson@hotmail.com</p>
                    </li>
                  </ul>
                  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
  );
}
