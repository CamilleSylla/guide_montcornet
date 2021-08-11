import axios from "axios"

export default function Content ({page}) {

    return (
        <section style={{width: "100%", display: "flex"}}>
            <div style={{marginLeft: "20vw", width: "100%", minHeight:"100vh"}}>
                <h1 style={{width:"80%", margin: "0 auto", padding: "10vh 0 10vh 0", fontSize: "3rem", textTransform: "uppercase"}}>{page[0].title.rendered}</h1>
            <div style={{margin: "0 auto", width: "60%", textAlign: "justify", textJustify: "newspaper"}} dangerouslySetInnerHTML={{ __html: `${page[0].content.rendered}` }}/>
            </div>
        </section>
    )
}

export async function getStaticPaths() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
    .then(res => res.data)
  
    const paths = res.map((cat) => ({
      params: { id: cat.id.toString() },
    }))
  
    return { paths, fallback: false }
  }

export async function getStaticProps({params}) {
    const page = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?categories=${params.id}`)
    .then(res => res.data)
    return {
        props: {
            page
        }
    }
} 