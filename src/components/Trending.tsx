import { Spinner, Center, Text } from '@chakra-ui/react'
import { RepositoryItem } from './RepositoryItem'
import { useTrendingRepositories } from '../services/useTrendingRepositories'
import { useSaveRepositories } from '../services/useSaveRepositories'

export const Trending = (): JSX.Element => {
  const { isLoading, error, repositoryResponseData } = useTrendingRepositories()
  const { checkIsSaved, toggleSave } = useSaveRepositories()

  if (isLoading) {
    return (
      <Center paddingTop={10}>
        <Spinner />
      </Center>
    )
  }

  if (error) {
    return (
      <Text>Oops! There was an error retrieving information from the github API, please try again in a minute.</Text>
    )
  }

  return (
    <>
      {(repositoryResponseData?.items || []).map((item) => {
        return (
          <RepositoryItem
            key={item.id}
            repository={item}
            onToggleSave={() => toggleSave(item)}
            isSaved={checkIsSaved(item.id)}
          />
        )
      })}
    </>
  )
}
