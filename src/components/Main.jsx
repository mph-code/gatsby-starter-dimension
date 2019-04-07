import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/iceberg.jpg'
import pic02 from '../images/sky-bg.jpg'
import pic03 from '../images/about.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <h3>The tip of the iceberg</h3>
          <span className="image main"><img src={pic01} alt="Tip of the Iceberg" /></span>
          <p>My legal name is Matthew Hill. I also go by Mateo. </p>
          <p>As you may have heard, I am an experienced Software Quality Assurance Engineer. I am also ISTQB certified. My attention to detail and passion for software and the development life cycle are just the tip of the iceberg. Check out the other sections to learn more.</p>
          <p>My experience and skills are also not limited to Quality Assurance. I have a plethora of customer service experience in both a technical and non-technical environment, in addition to some project management experience. Other experiences include conducting software training, working with e-mail marketing campaigns and much more. View my <a href="https://www.résumé.co">resume</a> for more information.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="Sky" /></span>
          <p>I have become increasingly more interested in creating new things whenever I can, feeling an immense sense of urgency to make my mark. There are several projects I am currently working on. I recently set up a blog, Coding Saga, for documenting some of my accomplishments during the journey to quench my infinite thirst for knowledge. I will translate some of my work and things I learn into tutorials and articles. The blog is currently still in its infancy, but can be found at <a href="https://www.codingsa.ga">codingsa.ga</a>.</p>
          <p>Some of my current and future projects include various web scrapers and automations, a trello tool, GitHub automation, Spotify playlist automations and a bookmarking/web-clipping solution that uses machine learning for tagging intelligence. I also am very interested in working with APIs to automate tasks, similar to the awesomeness of <a href="https://www.zapier.com">Zapier</a>.</p>
          <p>The languages and technologies I primarily tend to work with are Python, Java, Selenium and JavaScript. Areas I am interested in or working to improve include, but are not likely limited to, React, Node.js, AI/Machine Learning, GraphQL, serverless computing and many others. Let's not kid ourselves; I could list everything here.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>This content is always a work in progress, just like you and I. Life, to me, is about continuous improvement. Similar to continuous integration in software, we should be continuously fixing our personal defects and improving upon ourselves. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>If I could freeze time, I would consume all the information in the world. Out of my many interests, my true passions are software quality/software development, automation and music production. I also have some interest in design and would like to make time for it in the future. I believe that a <a href="https://hbr.org/2014/04/creating-a-culture-of-quality">quality mindset</a> should, to a certain extent, also take <a href="https://lawsofux.com/">design</a> into consideration, given the <a href="https://alistapart.com/article/psychology-of-design">impact</a> it can have. Additionally, my knowledge in the area of health and fitness is also quite extensive and I have been lifting weights for over 15 years. This led me to start the <a href="https://www.lifthacker.com">Lifthacker blog</a>, although my passion for software development has put that project on the back burner for the time being.</p>
          <p>I am always working on a project, automating a task or getting a melody out of my head and into my DAW (Digital Audio Workstation, i.e. music production software). If I'm not currently working on something, I always have an endless stream of ideas still flowing in my head. Creative problem solving is something I feel comes naturally to me. </p>
          <p>I am also a huge advocate and practitioner of personal growth and productivity. I strive to be the best version of myself and regularly work on enhancing my productivity. Always looking for ways to improve myself also translates well into my work with software quality assurance, testing and automation. </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="http://www.github.com/IAmMateo" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
