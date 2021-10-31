import { Flex, Spacer, Badge, Image, IconButton, Icon, Text, Link } from '@chakra-ui/react'
import { GoLaw, GoBookmark, GoClock } from 'react-icons/go'
import type { Repository } from 'services/getTrendingRepositories'
import { truncate } from '../utils/truncate'
import { dateToTimeAgo } from '../utils/dateToTimeAgo'
import { TextWithIcon } from './General/TextWithIcon'

export type RepositoryItemProps = {
  repository: Repository
  onToggleSave: () => void
  isSaved: boolean
}

export const RepositoryItem = ({ repository, isSaved, onToggleSave }: RepositoryItemProps): JSX.Element => {
  const updatedTimeAgo = dateToTimeAgo(new Date(repository.updated_at))

  return (
    <Flex direction='column' p={3} rounded={5} background='white' mb={5}>
      <Flex mb={1}>
        <Link href={repository.url} isExternal color='blue.500' fontWeight='500'>
          {repository.name}
        </Link>
        <Spacer />
        <IconButton
          size='sm'
          aria-label='Save Repository'
          colorScheme='white'
          onClick={onToggleSave}
          icon={<Icon color={isSaved ? 'orange' : 'black'} as={GoBookmark} />}
        />
      </Flex>

      <Flex mb={3}>
        <Image src={repository.owner.avatar_url} rounded={3} width={38} height={38} />

        <Text pl={5} fontSize='small' wordBreak='break-word'>
          {truncate(repository.description, 130)}
        </Text>
      </Flex>

      <Flex justifyContent='space-between'>
        <TextWithIcon icon={GoClock}>{updatedTimeAgo}</TextWithIcon>
        <TextWithIcon icon={GoLaw}>{repository.license?.name}</TextWithIcon>

        {repository.language && <Badge>{repository.language}</Badge>}
      </Flex>
    </Flex>
  )
}
