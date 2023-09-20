import client from "@/client"

const Page = ({ params }: {
  params: {id: string}
}) => {
  return (
    <article>
      <h1>page ID: {params.id}</h1>
    </article>
  )
}


export default Page