import { Spinner } from '@chakra-ui/react'
import { RepositoryItem } from './RepositoryItem'
import { useTrendingRepositories } from '../services/useTrendingRepositories'
import { useSaveRepositories } from '../services/useSaveRepositories'

export const Trending = (): JSX.Element => {
  const { isLoading, repositoryResponseData } = useTrendingRepositories()
  const { checkIsSaved, toggleSave } = useSaveRepositories()

  if (isLoading) return <Spinner />

  return (
    <>
      {(repositoryResponseData?.items || []).map((item) => {
        return (
          <RepositoryItem
            key={item.id}
            avatarUrl={item.owner.avatar_url}
            license={item.license?.name}
            username={item.owner.login}
            onToggleSave={() => toggleSave(item)}
            isSaved={checkIsSaved(item.id)}
          />
        )
      })}
    </>
  )
}
