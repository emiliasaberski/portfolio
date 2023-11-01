import Showreel from '../assets/screenshot.png'
import ToDo from '../assets/todo-mockup.png'
import ChatBot from '../assets/chatbot-mockup.png'
import Worn from '../assets/Worn_pressrelease_comp_Page_1.png'
import Storytel from '../assets/Storytel_1.png'

export const PortfolioData = [
  {
    id: 1,
    img: Showreel,
    name: 'Showreel',
    description: 'My showreel for 2023 containing selected projects and technologies.',
    tags: ['motion design', 'design'],
    link: '/showreel'
  },
  {
    id: 2,
    img: ToDo,
    name: 'To do-app',
    description: 'A To do app built in React',
    tags: ['react', 'redux', 'web design'],
    link: '/todoapp'
  },
  {
    id: 3,
    img: ChatBot,
    name: 'Chatbot',
    description: 'A time machine built as a chatbot.',
    tags: ['react', 'redux', 'web design'],
    link: 'https://golden-dasik-903b87.netlify.app/'
  },
  {
    id: 4,
    img: Worn,
    name: 'Worn',
    description: '',
    tags: ['graphic design', 'layout'],
    link: '/worn'
  },
  {
    id: 5,
    img: Storytel,
    name: 'Storytel',
    description: '',
    tags: ['motion design', 'animation'],
    link: '/storytel'
  }
]