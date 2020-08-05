import image from '../../assets/images/pmp.svg'
import devops from '../../assets/images/devops.svg'

const courses = [
  {
    name: 'Scrum Master',
    description:
      'A scrum master is the facilitator for an agile development team. Scrum is a methodology that allows a team to self-organize and make changes quickly, in accordance with agile principles. The scrum master manages the process for how information is exchanged.',
    image,
    bg: 'info',
  },
  {
    name: 'JavaScript',
    description:
      'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.',
    image: devops,
    bg: 'light',
  },
  {
    name: 'DevOps',
    description:
      'DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.',
    image,
    bg: 'info',
  },
  {
    name: 'Project Management',
    description:
      'Project management is the practice of leading the work of a team to achieve goals and meet success criteria at a specified time.',
    image: devops,
    bg: 'light',
  },
  {
    name: 'Data Science',
    description:
      'Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data.',
    image,
    bg: 'info',
  },
  {
    name: 'Cloud',
    description:
      'Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.',
    image: devops,
    bg: 'light',
  },
]

export default courses
