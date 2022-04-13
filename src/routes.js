import HomePage from './home/HomePage.vue';
import ElectricHome from './themes/electric/ElectricHome.vue';
import ClassicHome from './themes/classic/ClassicHome.vue';
import ESportsHome from './themes/esports/ESportsHome.vue';

export default [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/electric',
    name: 'Electric',
    component: ElectricHome,
    props: {
      churchName: 'Template Church',
      serviceTimes: [
        '8am', '9:30am', '11am'
      ],
      slideData: [
          {
              id: 0,
              active: true,
              title: 'Your Church Website, On Your Budget',
              details: 'Hostly.ch is a free website for your church. If your church needs a website but doesn\'t have a large budget, this is the place for you.',
              imgUrl: '/template/sunrise.jpg'
          }, {
              id: 1,
              active: false,
              title: 'Your Online Presence Starts Here',
              details: 'Getting started with a website doesn\'t have to be difficult. Hostly.ch is a perfect place to start your online presence with professionalism and excellence.',
              imgUrl: '/template/communicate.jpg'
          }
      ]
    }
  },
  {
    path: '/classic',
    name: 'Classic',
    component: ClassicHome
  },
  {
    path: '/sporty',
    name: 'E-Sports',
    component: ESportsHome
  }
];
