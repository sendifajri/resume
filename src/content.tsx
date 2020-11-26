import React from "react";


export const Content = {
  educations: [
    {
      company: "Universitas Gunadarma",
      title: "Software Engineer",
      date: {
        start: "Aug, 2013",
        end: "Dec, 2017",
      },
    },
    {
      company: "SMA Yadika 5",
      title: "Sciences",
      date: {
        start: "Jul, 2010",
        end: "Jul, 2013",
      },
    },
  ],
  employments: [
    {
      company: "Adroady",
      title: "Front End Technical Lead",
      date: {
        start: "Sep 2019",
        end: "Present",
      },
      description: (
        <ul>
          <li>Building stable and maintainable codebases using React</li>
          <li>
            Contribute to the design, estimation, planning and implementation of
            IT system related business solutions
          </li>
          <li>
            Collaborating with designers to ensure design were efficient and
            technically sound
          </li>
          <li>
            Assisting in defining software architectures - Collaborating with
            leads to explore existing systems, determining areas of complexity,
            potential risks to successful implementation, learning the
            applications capabilities
          </li>
          <li>Support team DevOps to build base CI/CD piplines</li>
        </ul>
      ),
    },
    {
      company: "PT Optify",
      title: "Lead Developer",
      date: {
        start: "Jan 2019",
        end: "Sep 2019",
      },
      description: (
        <ul>
          <li>Manage and maintenance server client</li>
          <li>
            Work closely with business partners, project managers and team
            members to clearly define scope of work and provide accurate
            schedule estimates
          </li>
          <li>
            Provide status reports to Manager and review boards on complex
            development projects
          </li>
          <li>
            Designing and implementing HTML email templates and newslatter for
            marketing campaigns
          </li>
        </ul>
      ),
    },
    {
      company: "PT Optify",
      title: "Front End Developer",
      date: {
        start: "Dec 2017",
        end: "Jan 2019",
      },
      description: (
        <ul>
          <li>
            Delivered responsive, cross-browser compatible and accessibility
            compliant websites
          </li>
          <li>
            Produced visual elements of web applications by translating UI/UX
            design wireframes into code while producing high quality, reusable
            markup using HTML5 and CSS3
          </li>
        </ul>
      ),
    },
  ],
  skills: [
    {
      icon: <i className="devicon-javascript-plain"></i>,
      text: "Javascript",
      rating: 5,
    },
    {
      icon: <i className="devicon-nodejs-plain"></i>,
      text: "Nodejs",
      rating: 5,
    },
    {
      icon: <i className="devicon-typescript-plain"></i>,
      text: "Typescript",
      rating: 5,
    },
    {
      icon: <i className="devicon-rails-plain"></i>,
      text: "Rails",
      rating: 4,
    },
    {
      icon: <i className="devicon-ruby-plain"></i>,
      text: "Ruby",
      rating: 4,
    },
    {
      icon: <i className="devicon-react-original"></i>,
      text: "React",
      rating: 5,
    },
    {
      icon: <i className="devicon-vuejs-plain"></i>,
      text: "Vuejs",
      rating: 4,
    },
    {
      icon: <i className="devicon-html5-plain"></i>,
      text: "HTML",
      rating: 5,
    },
    {
      icon: <i className="devicon-css3-plain"></i>,
      text: "Css",
      rating: 5,
    },
    {
      icon: <i className="devicon-less-plain-wordmark"></i>,
      text: "Less",
      rating: 5,
    },
    {
      icon: <i className="devicon-sass-plain"></i>,
      text: "Sass",
      rating: 5,
    },
    {
      icon: <i className="devicon-babel-plain"></i>,
      text: "Babel",
      rating: 4,
    },
    {
      icon: <i className="devicon-python-plain"></i>,
      text: "Python",
      rating: 4,
    },
    {
      icon: <i className="devicon-rust-plain"></i>,
      text: "Rust",
      rating: 3,
    },
  ],
};
