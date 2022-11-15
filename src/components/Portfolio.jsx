import React from 'react';

const Portfolio = () => (
  <section className="">
    <div className="flex flex-row justify-between items-center w-full text-dimWhite">
      <h2 className="mb-5">Portfolio</h2>
      <div className="team-area">
        <div className="single-team">
          <img src="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/tasktracker.png?alt=media&token=702986be-ff21-45ab-8d57-610e69fae7dc" alt="Alternative text for Tasktrack" />
          <div className="team-text">
            <h2>Tasktrack</h2>
            <p>Follow your todo&apos; progress</p>
            <div className="summary-stack">
              <ul className="item1">
                <li>Rails</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
              <p className="item2">
                <a href="https://github.com/ricardovaltierra/task-track-app" target="_blank" rel="noreferrer"><i aria-label="Link to repository" className="fab fa-github fa-lg" /></a>
                <a href="https://tasktrack.netlify.app/" target="_blank" rel="noreferrer"><i aria-label="Link to live site" className="fab fa-chrome fa-lg" /></a>
              </p>
            </div>
          </div>
        </div>
        <div className="single-team">
          <img src="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/alpha_blog.png?alt=media&token=05588438-a24e-4ef6-bb17-27634fa24abd" alt="Alternative text for Alpha Blog" />
          <div className="team-text">
            <h2>Alpha Blog</h2>
            <p>Rails site for blog posting</p>
            <div className="summary-stack">
              <ul className="item1">
                <li>Rails 6</li>
                <li>PostgreSQL</li>
                <li>Heroku</li>
              </ul>
              <p className="item2">
                <a href="https://github.com/ricardovaltierra/alpha_blog" target="_blank" rel="noreferrer"><i aria-label="Link to repository" className="fab fa-github fa-lg" /></a>
                <a href="https://analphablog.herokuapp.com/" target="_blank" rel="noreferrer"><i aria-label="Link to live site" className="fab fa-chrome fa-lg" /></a>
              </p>
            </div>
          </div>
        </div>
        <div className="single-team">
          <img src="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/sample_app.jpg?alt=media&token=e3f600a0-cdde-4f6c-a5f8-adf3a743a7a8" alt="Alternative text for Rails Sample App" />
          <div className="team-text">
            <h2>Sample App</h2>
            <p>A practice from M.H.&apos;s book</p>
            <div className="summary-stack">
              <ul className="item1">
                <li>Rails 7</li>
                <li>Hotwire</li>
                <li>AWS S3</li>
              </ul>
              <p className="item2">
                <a href="https://github.com/ricardovaltierra/sample_app" target="_blank" rel="noreferrer"><i aria-label="Link to repository" className="fab fa-github fa-lg" /></a>
                <a href="https://sample-app-rv.herokuapp.com/" target="_blank" rel="noreferrer"><i aria-label="Link to live site" className="fab fa-chrome fa-lg" /></a>
              </p>
            </div>
          </div>
        </div>
        <div className="single-team">
          <img src="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/news-week.jpg?alt=media&token=ee3fd61f-06fc-43bf-b727-4d8419e8241c" alt="Alternative text for Newsweek page" />
          <div className="team-text">
            <h2>Newsweek</h2>
            <p>A boootstrap clone</p>
            <div className="summary-stack">
              <ul className="item1">
                <li>HTML</li>
                <li>Bootstrap</li>
                <li>CSS</li>
              </ul>
              <p className="item2">
                <a href="https://github.com/ricardovaltierra/bootstrap" target="_blank" rel="noreferrer"><i aria-label="Link to repository" className="fab fa-github fa-lg" /></a>
                <a href="https://newsweek-responsive.netlify.app/" target="_blank" rel="noreferrer"><i aria-label="Link to live site" className="fab fa-chrome fa-lg" /></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
