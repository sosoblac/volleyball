import React from 'react'
import styles from './newsdetails.module.css'
import SimpleHero from '../../../components/SimpleHero/SimpleHero'
import { latestnews } from '../../../data/data'
import NewsDetails from '../../../components/NwesDetails/NewsDetails'

const page = ({params}) => {
    const newsItem = latestnews.find((item)=> item.id === parseInt(params.id))
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <SimpleHero title={newsItem.title} img={newsItem.img}/>
      </section>
      <section>
        <NewsDetails news = {newsItem}/>
        {newsItem?.id}
        {newsItem?.title}
      </section>
    </div>
  )
}

export default page
