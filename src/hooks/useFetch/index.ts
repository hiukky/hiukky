import useSWR from 'swr'

export function useFetch<Data = any, Error = any>(path: string) {
  const { data, error } = useSWR<Data, Error>(path, async () => {
    const response = await fetch(path)
    return await response.json()
  })

  return { data, error }
}
