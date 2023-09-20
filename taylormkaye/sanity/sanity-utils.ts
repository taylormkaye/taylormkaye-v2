import {createClient, groq} from 'next-sanity'

export const getProjects = async () => {
  const client = createClient({
    projectId: 't4txo4o6',
    dataset: 'production',
  })

  return client.fetch(
    groq`*[_type == "project"]{
        __id,
        __createdAt, 
        name, 
        "slug": slug.current, 
        "image": image.asset->url,
        url,
        content
    }`,
  )
}
