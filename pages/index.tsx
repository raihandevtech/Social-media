import type { NextPage } from 'next'
import Feed from '../components/Feed';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';


const Home: NextPage = () => {
  return (
    <main>
      <div className="_home_section_wrap">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </main>
  )
}

export default Home;
