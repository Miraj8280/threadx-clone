import { useSelector } from 'react-redux'
import Home from '../components/Home'
import Like from '../components/LikedQuotes'
import UserInfo from '../components/UserInfo'
import TrendingTopics from '../components/TrendingTopics'

const IndexPage = () => {

  const activeFeed = useSelector(state => state.feed.activeFeed)

  return (
    <div className='flex bg-black w-full h-full'>
        <UserInfo />
      {activeFeed === 'Home' && <Home />}
      { activeFeed  === 'Like' && <Like />}
      <TrendingTopics />
    </div>
  )
}

export default IndexPage