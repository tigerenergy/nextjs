import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = (props) => {
  return (
    <>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId
  console.log(meetupId)

  return {
    props: {
      meetupData: {
        image:
          'https://img.freepik.com/free-photo/beautiful-votivkirche-cathedrals-or-votive-church-on-the-ringstrasse-for-austrians-people-and-foreigner-travelers-travel-visit-and-respect-praying-god-in-vienna-austria_258052-3586.jpg?w=2000',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5 , Some City',
        description: 'This is a first meetup',
      },
    },
  }
}

export default MeetupDetails
