import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { NavigationContext } from '../context/navigation'
import styles from '../styles/Home.module.css'

export default function Home({categorie}) {
  const [navigation, setNavigation] = useContext(NavigationContext)

  useEffect(() => {
    setNavigation(categorie)
  }, [])
  return (
    <div className={styles.container}>
    </div>
  )
}

export async function getStaticProps() {
  const categorie = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
  .then(res => res.data)
console.log(categorie);
  return {
    props: {
      categorie
    }
  }
}