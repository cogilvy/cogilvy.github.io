import React, { Component } from 'react';

class Resume extends Component {

  render() {
    return (
      <div>
      <section className="section">
      <div className="container">
          <div className="columns">
              <div className="column is-three-fifths">
                  <div className="summary">
                      <div className="title is-size-5 has-text-primary has-text-weight-bold">SUMMARY</div>
                      <hr className="line-break"></hr>
                      <div className="wrapper" style={{width: "75%"}}>
                        Dedicated full stack web developer with two years of personal experience in software development and website design.
                        recent graduate from The Flatiron School in New York.
                        Strong creative and analytical skills. Team player with an eye for detail. MySQL, Python and Ruby on Rails.
                        Full-Stack Developer and
                        Mainly experienced in HTML, CSS, Ruby, SQL, Rails, Javascript, React, NodeJS,
                        Redux, and C++, but have worked with Java, C#, and Python as well.<br></br><br></br>

                        I have been teaching myself to code for 5-6 years now, but about 4 years ago I
                        made the decision to make a casual hobby into a successful career. My love for
                        coding is unrivaled by anything else I have ever done, and I am passionate about
                        learning any new technologies and languages that come my way. I am ambitious, work
                        well in a team, and desire everyone around me to be as successful as they can be.
                      </div>
                      <br></br>
                      <br></br>
                  </div>

                  <div className="experience">
                    <div className="title is-size-5 has-text-primary has-text-weight-bold">EXPERIENCE</div>
                    <hr className="line-break"></hr>
                      <div className="item">
                        <div className="is-size-5">
                          <b>Hilton, </b>
                          <span className="has-text-weight-semi-bold">
                            San Diego, CA — <i>Bellman, Guest Services</i>
                          </span>
                        </div>
                        <div className="is-size-7">3 Years, 8 Months</div>
                          <ul style={{listStyle: "disc", marginLeft: "1em"}}>
                            <li>Greet guests upon arrival, assist with luggage, and escort guests to room.</li>
                            <li>Meet any needs the guest has, assure their stay is as perfect as possible.</li>
                            <li>Handle shipping and receiving needs for conferences with 1000+ people.</li>
                          </ul>
                          <br></br>
                        </div>
                      <div className="item">
                        <div className="is-size-5">
                          <b>Chromalloy Aerospace, </b>
                          <span className="has-text-weight-semi-bold">
                            San Diego, CA — <i>Information Technology Intern</i>
                          </span>
                        </div>
                        <div className="is-size-7">6 Months</div>
                          <ul style={{listStyle: "disc", marginLeft: "1em"}}>
                            <li>Assisted in transfer of system from AS400 & Impresa (Oracle) to Epicor 9.</li>
                            <li>Audited repair instruction manuals for commercial and military plane engines.</li>
                            <li>Hands on experience using C++ in a multinational company environment.</li>
                          </ul>
                        </div>
                        <br></br>
                        <br></br>
                      </div>

                  <div className="education">
                      <div className="title is-size-5 has-text-primary has-text-weight-bold">EDUCATION</div>
                      <hr className="line-break"></hr>
                          <div className="item">
                              <div className="is-size-5">
                                  <b>The Flatiron School</b>,
                                  <span className="has-text-weight-semi-bold">
                                      New York City, NY — <i>2019</i>
                                  </span>
                                  <div className="is-size-6">15 week immersive full stack web development program.</div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="is-size-5">
                                  <b>San Diego State University</b>,
                                  <span className="has-text-weight-semi-bold">
                                      San Diego, CA — <i>2018-2021</i>
                                  </span>
                                  <div className="is-size-6">Pursuing Bachelors of Science in Computer Engineering</div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="is-size-5">
                                  <b>Grossmont Community College</b>,
                                  <span className="has-text-weight-semi-bold">
                                      San Diego, CA — <i>2015-2018</i>
                                  </span>
                                  <div className="is-size-6">Pre-transfer General Education & Computer Engineering</div>
                              </div>
                          </div>
                          <br></br>
                          <br></br>
                  </div>

              </div>
              <div className="column">
                  <div className="projects">
                      <div name="projects" onClick={this.props.handlePageChange} className="title is-size-5 has-text-primary has-text-weight-bold">PROJECTS <span style={{fontSize: "0.7vw", color: "black"}}>(Click 'Projects' tab to see more)</span></div>
                      <hr className="line-break-long"></hr>
                          <div className="item">
                              <div className="is-size-5">
                                  <b>Cryptopedia</b>
                              </div>
                              <div className="is-size-7">
                                <ul style={{listStyle: "disc", marginLeft: "1em", fontSize: "0.8vw"}}>
                                  <li>Cryptocurrency trading simulator for beginners to practice trading without any risk of losing their money.</li>
                                  <li>Buy/Sell cryptocurrencies with real time prices and statistics updates for an accurate simulation of how buying and selling cryptocurrencies would be in real life.</li>
                                  <li>View charts and statistics for each crypto, as well as provide tips and outside resources to help users learn as much as possible.</li>
                                </ul>
                              </div>
                          </div>
                          <br></br>
                          <div className="item">
                              <div className="is-size-5">
                                  <b>The Coding Network</b>
                              </div>
                              <div className="is-size-7">
                                <ul style={{listStyle: "disc", marginLeft: "1em", fontSize: "0.8vw"}}>
                                  <li>Social media platform for developers and others in the tech community.</li>
                                  <li>Users can create posts, share articles, and like/comment on others posts.</li>
                                  <li>Users can also follow other users to adjust what they see on their news feed.</li>
                                </ul>
                              </div>
                          </div>
                          <br></br>
                          <div className="item">
                              <div className="is-size-5">
                                  <b>NYC Gentrification Heatmap</b>
                              </div>
                              <div className="is-size-7">
                                <ul style={{listStyle: "disc", marginLeft: "1em", fontSize: "0.8vw"}}>
                                  <li>Using Google Maps API, show the effects of gentrification in two very different neighborhoods, Bushwick and Southeast Bronx.</li>
                                  <li>Data collected from NYC Open Data is used to create a heatmap layer.</li>
                                  <li>Users can leave comments to show other users what they though of this comparison.</li>
                                </ul>
                              </div>
                          </div>
                          <br></br>
                          <br></br>
                  </div>

                  <div className="skills">
                      <div className="title is-size-5 has-text-primary has-text-weight-bold">SKILLS</div>
                      <hr className="line-break-long"></hr>
                      <div className="wrapper">
                        <div class="columns">
                          <div class="column">
                            <div className="item">
                              <div>Javascript</div>
                              <span style={{fontSize: "2em", color: "gold"}}>
                                <i class="fab fa-js-square"></i>
                              </span>
                            </div>
                            <div className="item">
                              <div>Node</div>
                              <span style={{fontSize: "2em", color: "green"}}>
                                <i class="fab fa-node-js"></i>
                              </span>
                            </div>
                            <div className="item">
                              <div>HTML/CSS</div>
                              <span style={{fontSize: "2em", color: "orange"}}>
                                <i class="fab fa-html5"></i>
                              </span>
                              <span style={{fontSize: "2em", color: "blue", marginLeft: "3%"}}>
                                <i class="fab fa-css3-alt"></i>
                              </span>
                            </div>
                          </div>
                          <div class="column">
                            <div className="item">
                              <div>React/Redux</div>
                              <span style={{fontSize: "2em", color: "teal"}}>
                                <i class="fab fa-react"></i>
                              </span>
                            </div>
                            <div className="item">
                                <div>SQL</div>
                                <span style={{fontSize: "2em", color: "lightGrey"}}>
                                  <i class="fas fa-database"></i>
                                </span>
                            </div>
                            <div className="item">
                                <div>C++</div>
                                <span style={{height: "2em", color: "blue"}}>
                                  <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/>
                                </span>
                            </div>
                          </div>
                          <div class="column">
                            <div className="item">
                              <div>Ruby/Rails</div>
                              <span style={{fontSize: "2em", color: "red"}}>
                                <i class="fas fa-gem"></i>
                              </span>
                            </div>
                            <div className="item">
                                <div>AWS</div>
                                <span style={{fontSize: "2em", color: "gold"}}>
                                  <i class="fab fa-aws"></i>
                                </span>
                            </div>
                            <div className="item">
                                <div>React Native</div>
                                <span style={{fontSize: "2em", color: "teal"}}>
                                  <i class="fab fa-react"></i>
                                </span>
                            </div>
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

}

export default Resume;
