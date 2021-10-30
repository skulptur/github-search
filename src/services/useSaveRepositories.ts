import { useLocalStorage } from 'usehooks-ts'
import type { Repository } from './getTrendingRepositories'
import { removeItem } from '../utils/removeItem'
import { isValidIndex } from '../utils/isValidIndex'

export const useSaveRepositories = () => {
  const [savedRepositories, setSavedRepositories] = useLocalStorage<Array<Repository>>('savedRepositories', [])

  const findIndex = (repositoryId: number) => {
    return savedRepositories.findIndex((repository) => repository.id === repositoryId)
  }

  const checkIsSaved = (repositoryId: number) => {
    return isValidIndex(findIndex(repositoryId))
  }

  const toggleSave = (repository: Repository) => {
    const index = findIndex(repository.id)
    const isSaved = isValidIndex(index)

    setSavedRepositories(isSaved ? removeItem(savedRepositories, index) : [repository, ...savedRepositories])
  }

  return {
    savedRepositories,
    checkIsSaved,
    toggleSave,
  }
}
