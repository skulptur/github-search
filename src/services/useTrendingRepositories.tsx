import { useState } from 'react'
import { useOnMount } from '../hooks/useOnMount'
import { getTrendingRepositories, RepositoryResponseData } from './getTrendingRepositories'

export const useTrendingRepositories = () => {
  const [repositoryResponseData, setRepositoryResponseData] = useState<RepositoryResponseData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const update = () => {
    setIsLoading(true)

    getTrendingRepositories()
      .then(setRepositoryResponseData)
      .finally(() => {
        setIsLoading(false)
      })
  }

  useOnMount(update)

  return {
    isLoading,
    repositoryResponseData,
    update,
  }
}
