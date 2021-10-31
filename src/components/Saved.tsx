import { RepositoryItem } from './RepositoryItem'
import { useSaveRepositories } from '../services/useSaveRepositories'

export const Saved = (): JSX.Element => {
  const { savedRepositories, toggleSave } = useSaveRepositories()

  return (
    <>
      {savedRepositories.map((item) => {
        return <RepositoryItem key={item.id} repository={item} onToggleSave={() => toggleSave(item)} isSaved={true} />
      })}
    </>
  )
}
