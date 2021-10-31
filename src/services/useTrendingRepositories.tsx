import { subWeeks, format } from 'date-fns'
import useSWR from 'swr'
import type { RepositoryResponseData } from './github.types'

const getTrendingRepositoriesRequestUrl = () => {
  const oneWeekAgo = format(subWeeks(new Date(), 1), 'yyyy-MM-dd')

  return `https://api.github.com/search/repositories?q=created:>${oneWeekAgo}&sort=stars&order=desc`
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useTrendingRepositories = () => {
  const { data, error } = useSWR<RepositoryResponseData>(getTrendingRepositoriesRequestUrl(), fetcher)
  const isLoading = !data && !error

  return {
    isLoading,
    error,
    repositoryResponseData: data,
  }
}
