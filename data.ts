const mailSubject = ''
const mailBody = ''
const emailId = 'ms.harsh2001@gmail.com'
export const mailUrl = `mailto:${emailId}?subject=${mailSubject}&body=${mailBody}`

const personal = {
  name: 'Harsh Mishra',
  mob: 8394829751,
  headerTaglineOne: "Hi, I'm Harsh Mishra",
  headerTaglineTwo: 'I code and grow internet software.',
  introduction: "I'm a Software Engineer who enjoys turning problems and business requirements into technical solutions through code.",
  resumeUrl:
    'https://drive.google.com/file/d/1hoAYQuCyFBBTceR1-fTqkMMDWxFRdeLE/view?usp=drivesdk',
  email: emailId,
  socialsLinks: [
    {
      title: 'Github',
      icon: 'github',
      link: 'https://github.com/harshm06',
    },
    {
      title: 'Linkedin',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/harsh-mishra-060911/',
    },
    {
      title: 'LeetCode',
      icon: 'leetcode',
      link: 'https://leetcode.com/ms_harsh06/',
    },
    {
      title: 'UpWork',
      icon: 'upwork',
      link: 'https://www.upwork.com/freelancers/~0135f32a3cc0ba7d78',
    },
    {
      title: 'Email',
      icon: 'email',
      link: mailUrl,
    },
  ],
  skillsCard: [
    {
      icon: 'frontend',
      title: 'Frontend',
      desc: 'I enjoy creating visually appealing and user-friendly interfaces, bringing ideas to life in the browser.',
      mid1: 'Languages I speak',
      mid2: 'HTML, CSS, Sass, JavaScript, Typescript',
      tools: [
        'React JS',
        'Next JS',
        'Vue JS',
        'Redux',
        'Bootstrap',
        'SASS'
      ],
    },
    {
      icon: 'backend',
      title: 'Backend',
      desc: 'I enjoy solving complex problems through robust and scalable server-side solutions ensuring efficiency and accuracy.',
      mid1: 'Languages I speak',
      mid2: 'HTML, CSS, Sass, JavaScript, Typescript',
      tools: [
        'Django',
        'Flask',
        'MySQL',
        'Fast API',
        'Postgres',
        'Mongo'
      ],
    },
    {
      icon: 'devops',
      title: 'Devops',
      desc: 'I value faster development of new products and easier maintenance of existing deployments.',
      mid1: 'Languages I speak',
      mid2: 'UX, UI, Web, Apps, Logos',
      tools: ['AWS', 'Pandas', 'Docker', 'Git', 'Jenkins', 'JIRA'],
    },
  ],
  projects: [
    {
      title: 'Enterprise resource planning',
      icon: 'bookmark',
      desc: [
        'Developed a comprehensive and integrated ERP solution for the students and employees of KIET Group of Institutions. With development of modules like Attendance, Marks, HR and several others, we slashed the paperwork required by 90%.'
      ],
      type: '10K+ Daily Active Users',
      link: 'https://tech.kiet.edu/team-erp/#/',
      tech: ['Django', 'React JS', 'SQL'],
    },
    {
      title: 'Humbee Application',
      icon: 'yin-yang',
      desc: [
        'The project involved the development of a comprehensive application aimed at optimizing the entire workflow of the manufacturing chain. The digitization of these processes improved the overall efficiency and accuracy of each order by 50%, thus saving time and costs.'
      ],
      type: 'Freelance Project',
      link: 'https://play.google.com/store/apps/details?id=click.humbee.ui.twa',
      tech: ['FastAPI', 'Postgre SQL'],
    },
    {
      title: 'FunKids',
      desc: [
        'The project involved enhancing a portal for children to learn alphabets. Enhanced with various user interface features, it made learning more engaging and interactive for children. Due to the innovative ideas and features, this webapp made learning much more fun for kids.'
      ],
      icon: 'star_2',
      type: 'Open Source Contribution',
      link: 'https://github.com/Team-Tomato',
      tech: ['React JS', 'Git', 'SASS'],
    },
  ],
}

export {personal}
