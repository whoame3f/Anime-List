export const getAnimeResponse = async(resource, query) => {
    // try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
        // if (!response.ok) {
            // throw new Error('Failed to fetch');
        //   }
        const anime = await response.json()
        return anime
    // }catch (error) {
        // console.error('Error fetching anime:', error);
    //   }
}

export const getAnimeId = async(resource, query) => {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
        if (!response.ok) {
            throw new Error('Failed to fetch');
          }
        const anime = await response.json()
        return anime
    }catch (error) {
        console.error('Error fetching anime:', error);
      }
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }

    return response
}