// import { Spinner } from '@chakra-ui/react'
import { RepositoryItem } from './RepositoryItem'
import { useSaveRepositories } from '../services/useSaveRepositories'

export const Saved = (): JSX.Element => {
  const { savedRepositories, toggleSave } = useSaveRepositories()

  return (
    <>
      {savedRepositories.map((item) => {
        return (
          <RepositoryItem
            key={item.id}
            avatarUrl={item.owner.avatar_url}
            license={item.license?.name}
            username={item.owner.login}
            onToggleSave={() => toggleSave(item)}
            isSaved={true}
          />
        )
      })}
    </>
  )
}
