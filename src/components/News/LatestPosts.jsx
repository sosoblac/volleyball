import React from 'react'
import styles from './latestposts.module.css'
import RecentTeamNews from '../TeamPageComponents/RecentTeamNews/RecentTeamNews'
import { latestnews } from '../../data/data'

const LatestPosts = () => {
  return (
    <RecentTeamNews data = {latestnews} />
  )
}

export default LatestPosts
