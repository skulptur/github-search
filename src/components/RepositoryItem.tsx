import { Flex, Image, IconButton, Icon } from '@chakra-ui/react'
import { GoLaw, GoBookmark } from 'react-icons/go'

export type RepositoryItemProps = {
  avatarUrl: string
  license?: string
  username?: string
  onToggleSave: () => void
  isSaved: boolean
}

export const RepositoryItem = ({
  avatarUrl,
  license,
  username,
  isSaved,
  onToggleSave,
}: RepositoryItemProps): JSX.Element => {
  return (
    <Flex direction='row'>
      <Image src={avatarUrl} rounded={3} width={30} height={30} />
      <IconButton aria-label='Save Repository' icon={<Icon as={GoBookmark} />} onClick={onToggleSave} />
      <Icon as={GoLaw} />
      {license && (
        <Flex>
          <Icon as={GoLaw} /> {license}
        </Flex>
      )}
    </Flex>
  )
}
