import React, { Component } from 'react';

class HomePage extends Component {

  render() {
    return (
      <div>
      <section class="section">
      <div class="container">
          <div class="columns">
              <div class="column is-three-fifths">
                  <div class="summary">
                      <div class="title is-size-5 has-text-primary has-text-weight-bold">SUMMARY</div>
                      <div class="wrapper">
                        Full-Stack Developer and recent graduate from The Flatiron School in New York.<br></br>
                        Mainly experienced in HTML, CSS, Ruby, SQL, Rails, Javascript, React, NodeJS,<br></br>
                        Redux, and C++, but have worked with Java, C#, and Python as well.<br></br><br></br>

                        I have been teaching myself to code for 5-6 years now, but about 4 years ago I <br></br>
                        made the decision to make a casual hobby into a successful career. My love for <br></br>
                        coding is unrivaled by anything else I have ever done, and I am passionate about <br></br>
                        learning any new technologies and languages that come my way. I am ambitious, work <br></br>
                        well in a team, and desire everyone around me to be as successful as they can be. <br></br>
                      </div>
                      <br></br>
                      <br></br>
                  </div>

                  <div class="experience">
                    <div class="title is-size-5 has-text-primary has-text-weight-bold">EXPERIENCE</div>
                      <div class="item">
                        <div class="is-size-5">
                          <b>Hilton, </b>
                          <span class="has-text-weight-semi-bold">
                            San Diego, CA — <i>Bellman, Guest Services</i>
                          </span>
                        </div>
                        <div class="is-size-7">3 Years, 8 Months</div>
                          <ul style={{listStyle: "disc", marginLeft: "1em"}}>
                            <li>Greet guests upon arrival, assist with luggage, and escort guests to room.</li>
                            <li>Meet any needs the guest has, assure their stay is as perfect as possible.</li>
                            <li>Handle shipping and receiving needs for conferences with 1000+ people.</li>
                          </ul>
                        </div>
                      <div class="item">
                        <div class="is-size-5">
                          <b>Chromalloy Aerospace, </b>
                          <span class="has-text-weight-semi-bold">
                            San Diego, CA — <i>Information Technology Intern</i>
                          </span>
                        </div>
                        <div class="is-size-7">6 Months</div>
                          <ul style={{listStyle: "disc", marginLeft: "1em"}}>
                            <li>Assisted in transfer of system from AS400 & Impresa (Oracle) to Epicor 9.</li>
                            <li>Audited repair instruction manuals for commercial and military plane engines.</li>
                            <li>Hands on experience using C++ in a multinational company environment.</li>
                          </ul>
                        </div>
                        <br></br>
                        <br></br>
                      </div>

                  <div class="education">
                      <div class="title is-size-5 has-text-primary has-text-weight-bold">EDUCATION</div>
                          <div class="item">
                              <div class="is-size-5">
                                  <b>The Flatiron School</b>,
                                  <span class="has-text-weight-semi-bold">
                                      New York City, NY — <i>2019</i>
                                  </span>
                                  <div class="is-size-6">15 week immersive full stack web development program.</div>
                              </div>
                          </div>
                          <div class="item">
                              <div class="is-size-5">
                                  <b>San Diego State University</b>,
                                  <span class="has-text-weight-semi-bold">
                                      San Diego, CA — <i>2018-2021</i>
                                  </span>
                                  <div class="is-size-6">Pursuing Bachelors of Science in Computer Engineering</div>
                              </div>
                          </div>
                          <div class="item">
                              <div class="is-size-5">
                                  <b>Grossmont Community College</b>,
                                  <span class="has-text-weight-semi-bold">
                                      San Diego, CA — <i>2015-2018</i>
                                  </span>
                                  <div class="is-size-6">Pre-transfer General Education & Computer Engineering</div>
                              </div>
                          </div>
                          <br></br>
                          <br></br>
                  </div>

              </div>
              <div class="column">
                  <div class="projects">
                      <div class="title is-size-5 has-text-primary has-text-weight-bold">PROJECTS</div>
                          <div class="item">
                              <div class="is-size-5">
                                  <b>Cryptopedia</b>
                              </div>
                              <div class="is-size-7">
                                <ul style={{listStyle: "disc", marginLeft: "1em"}}>
                                  <li>Cryptocurrency trading simulator for beginners to practice trading without the risk.</li>
                                  <li>Buy/Sell cryptocurrencies with real time prices and statistics updates for an accurate simulation of how buying and selling cryptocurrencies would be in real life.</li>
                                  <li>View charts and statistics for each crypto, as well as provide tips and outside resources to help users learn as much as possible.</li>
                                </ul>
                              </div>
                          </div>
                          <br></br>
                          <div class="item">
                              <div class="is-size-5">
                                  <b>The Coding Network</b>
                              </div>
                              <div class="is-size-7">
                                <ul style={{listStyle: "disc", marginLeft: "1em"}}>
                                  <li>Social media platform for developers and others in the tech community.</li>
                                  <li>Users can create posts, share articles, and like/comment on others posts.</li>
                                  <li>Users can also follow other users to adjust what they see on their news feed.</li>
                                </ul>
                              </div>
                          </div>
                          <br></br>
                          <div class="item">
                              <div class="is-size-5">
                                  <b>NYC Gentrification Heatmap</b>
                              </div>
                              <div class="is-size-7">
                                <ul style={{listStyle: "disc", marginLeft: "1em"}}>
                                  <li>Using Google Maps API, show the effects of gentrification in two very different neighborhoods, Bushwick and Southeast Bronx.</li>
                                  <li>Data collected from NYC Open Data is used to create a heatmap showing the amount of new businesses opened as well as the number of calls to 311 with complaints.</li>
                                  <li>Users can leave comments to show other users what they though of this comparison.</li>
                                </ul>
                              </div>
                          </div>
                          <br></br>
                          <br></br>
                  </div>

                  <div class="skills">
                      <div class="title is-size-5 has-text-primary has-text-weight-bold">SKILLS</div>
                      <div class="wrapper">
                          <div class="item">
                              <div>Javascript</div>
                              <progress class="progress is-primary is-small" value="100" max="100"></progress>
                          </div>
                          <div class="item">
                              <div>React/Redux</div>
                              <progress class="progress is-primary is-small" value="100" max="100"></progress>
                          </div>
                          <div class="item">
                              <div>Ruby on Rails</div>
                              <progress class="progress is-primary is-small" value="100" max="100"></progress>
                          </div>
                          <div class="item">
                              <div>HTML/CSS</div>
                              <progress class="progress is-primary is-small" value="95" max="100"></progress>
                          </div>
                          <div class="item">
                              <div>SQL</div>
                              <progress class="progress is-primary is-small" value="90" max="100"></progress>
                          </div>
                          <div class="item">
                              <div>C++</div>
                              <progress class="progress is-primary is-small" value="85" max="100"></progress>
                          </div>
                          <div class="item">
                              <div>Node</div>
                              <progress class="progress is-primary is-small" value="70" max="100"></progress>
                          </div>
                          <div class="item">
                              <div>Swift</div>
                              <progress class="progress is-primary is-small" value="60" max="100"></progress>
                          </div>
                          <div class="item">
                              <div>React Native</div>
                              <progress class="progress is-primary is-small" value="60" max="100"></progress>
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

export default HomePage;
