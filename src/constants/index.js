import linkedinP from '../assets/linkedin_p.png';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'blog',
    title: 'Blog',
  },
];

export const projectsContent = [
  {
    id: 'tasktrack',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/tasktracker.png?alt=media&token=702986be-ff21-45ab-8d57-610e69fae7dc',
    alternativeText: 'Tasktrack App mock image',
    title: 'Task Track App',
    paragraph: 'Follow your todo\'s progress',
    stack: ['Rails', 'React', 'Redux'],
    githubLink: 'https://github.com/ricardovaltierra/task-track-app',
    liveURL: 'ttps://tasktrack.netlify.app/',
  },
  {
    id: 'alpha_blog',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/alpha_blog.png?alt=media&token=05588438-a24e-4ef6-bb17-27634fa24abd',
    alternativeText: 'Alpha blog mock image',
    title: 'Alpha Blog',
    paragraph: 'Rails site for blog posting',
    stack: ['Rails 6', 'PostgreSQL', 'Heroku'],
    githubLink: 'https://github.com/ricardovaltierra/alpha_blog',
    liveURL: 'https://analphablog.herokuapp.com/',
  },
  {
    id: 'sample_app',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/sample_app.jpg?alt=media&token=e3f600a0-cdde-4f6c-a5f8-adf3a743a7a8',
    alternativeText: 'Sample App mock image',
    title: 'Sample App',
    paragraph: 'A practice from M.H.\' book',
    stack: ['Rails 7', 'Hotwire', 'AWS S3'],
    githubLink: 'https://github.com/ricardovaltierra/sample_app',
    liveURL: 'https://sample-app-rv.herokuapp.com/',
  },
  {
    id: 'newsweek',
    image: 'https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/news-week.jpg?alt=media&token=ee3fd61f-06fc-43bf-b727-4d8419e8241c',
    alternativeText: ' mock image',
    title: 'Newsweek',
    paragraph: 'A boootstrap clone',
    stack: ['HTML', 'Bootstrap', 'CSS'],
    githubLink: 'https://github.com/ricardovaltierra/bootstrap',
    liveURL: 'https://newsweek-responsive.netlify.app/',
  },
];

export const siteMetadata = {
  title: 'Ricardo Valtierra | Portfolio',
  description: 'Ricardo Valtierra\'s personal portfolio',
  type: 'website',
  siteName: 'ricardovaltierra.online',
  locale: 'en_US',
  author: 'Ricardo Valtierra (who else?)',
  image: linkedinP,
};
