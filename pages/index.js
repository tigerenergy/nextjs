import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://img.freepik.com/free-photo/beautiful-votivkirche-cathedrals-or-votive-church-on-the-ringstrasse-for-austrians-people-and-foreigner-travelers-travel-visit-and-respect-praying-god-in-vienna-austria_258052-3586.jpg?w=2000',
    address: 'Some address 5, 12345 some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://newsimg.hankookilbo.com/cms/articlerelease/2021/01/13/78592d68-066f-4e1f-a8d1-789d3b53665e.jpg',
    address: 'Some address 10, 678910 some City',
    description: 'This is a Second meetup!',
  },
]

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  )
}
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }
}

export default HomePage
