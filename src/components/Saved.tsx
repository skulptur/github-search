import { Text } from '@chakra-ui/react'
import { RepositoryItem } from './RepositoryItem'
import { useSaveRepositories } from '../services/useSaveRepositories'

export const Saved = (): JSX.Element => {
  const { savedRepositories, toggleSave } = useSaveRepositories()

  if (!savedRepositories.length) {
    return <Text>Your saved repositories will show up here!</Text>
  }

  return (
    <>
      {savedRepositories.map((item) => {
        return <RepositoryItem key={item.id} repository={item} onToggleSave={() => toggleSave(item)} isSaved={true} />
      })}
    </>
  )
}
