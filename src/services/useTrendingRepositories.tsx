import { subWeeks, format } from 'date-fns'
import useSWR from 'swr'
import type { RepositoryResponseData } from './github.types'

const getTrendingRepositoriesRequestUrl = (language: string) => {
  const languageQuery = language ? ` language:${language}` : ''
  const oneWeekAgo = format(subWeeks(new Date(), 1), 'yyyy-MM-dd')

  return `https://api.github.com/search/repositories?q=created:>${oneWeekAgo}${languageQuery}&sort=stars&order=desc`
}

const fetcher = (url: string) => {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText)
    }
    return res.json()
  })
}

export const useTrendingRepositories = (language: string) => {
  const { data, error } = useSWR<RepositoryResponseData>(getTrendingRepositoriesRequestUrl(language), fetcher)
  const isLoading = !data && !error

  return {
    isLoading,
    error,
    repositoryResponseData: data,
  }
}
