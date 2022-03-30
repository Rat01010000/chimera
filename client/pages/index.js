import styles from '../styles/Home.module.css'
import Header from '../Components/Header.js'


export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/api/v2/pages/3/?format=json')
  const data = await res.json()
  return {
    props: { data }
  }
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Header cards={data.cards} />
    </div>
  )
}
