import { useState } from 'react'
import { Spinner, Center, Text, Select, Flex, Button } from '@chakra-ui/react'
import { RepositoryItem } from './RepositoryItem'
import { useTrendingRepositories } from '../services/useTrendingRepositories'
import { useSaveRepositories } from '../services/useSaveRepositories'
import { githubLanguages } from '../services/githubLanguages'

export const Trending = (): JSX.Element => {
  const [language, setLanguage] = useState('')
  const { isLoading, error, repositoryResponseData } = useTrendingRepositories(language)
  const items = repositoryResponseData?.items || []
  const { checkIsSaved, toggleSave } = useSaveRepositories()

  const renderContent = () => {
    if (isLoading) {
      return (
        <Center>
          <Spinner />
        </Center>
      )
    }
    if (error) {
      return (
        <Text textAlign='center'>
          Oops! There was an error retrieving information from Github.
          <br />
          Please try again soon.
        </Text>
      )
    }
    if (!items.length) {
      return <Text textAlign='center'>No results.</Text>
    }

    return items.map((item) => {
      return (
        <RepositoryItem
          key={item.id}
          repository={item}
          onToggleSave={() => toggleSave(item)}
          isSaved={checkIsSaved(item.id)}
        />
      )
    })
  }

  return (
    <>
      <Flex>
        <Select
          placeholder='Filter by language'
          marginBottom={5}
          background='white'
          isDisabled={isLoading}
          value={language}
          onChange={(event) => setLanguage(event.target.value || '')}
        >
          {githubLanguages.map((language) => {
            return (
              <option key={language} value={language}>
                {language}
              </option>
            )
          })}
        </Select>

        <Button isDisabled={!language} colorScheme='blue' marginLeft={5} onClick={() => setLanguage('')}>
          Clear
        </Button>
      </Flex>

      {renderContent()}
    </>
  )
}
