import { Flex, Box, Spacer, Badge, Image, IconButton, Icon, Text, Link } from '@chakra-ui/react'
import { GoBookmark, GoClock, GoSync, GoLaw } from 'react-icons/go'
import { FiStar } from 'react-icons/fi'
import type { Repository } from 'services/github.types'
import { truncate } from '../utils/truncate'
import { formatDistanceToNowStrict, format } from 'date-fns'
import { TextWithIcon } from './General/TextWithIcon'

export type RepositoryItemProps = {
  repository: Repository
  onToggleSave: () => void
  isSaved: boolean
}

export const RepositoryItem = ({ repository, isSaved, onToggleSave }: RepositoryItemProps): JSX.Element => {
  return (
    <Flex direction='column' background='white' padding={3} rounded={5} marginBottom={5}>
      <Flex marginBottom={1}>
        <Link href={repository.html_url} isExternal color='blue.500' fontWeight='500'>
          {repository.name}
        </Link>
        <Spacer />
        <IconButton
          size='sm'
          aria-label='Save Repository'
          onClick={onToggleSave}
          icon={<Icon color={isSaved ? 'orange' : 'black'} as={GoBookmark} />}
        />
      </Flex>

      <Flex marginBottom={3}>
        <Image src={repository.owner.avatar_url} rounded={3} width={38} height={38} />
        <Text paddingLeft={5} fontSize='small' wordBreak='break-word'>
          {truncate(repository.description || '', 130)}
        </Text>
      </Flex>

      <Flex>
        <TextWithIcon icon={GoClock}>{format(new Date(repository.created_at), 'MMM do yyyy')}</TextWithIcon>
        <TextWithIcon icon={GoSync} marginLeft={3}>
          {formatDistanceToNowStrict(new Date(repository.updated_at))} ago
        </TextWithIcon>
        <Spacer />
        <Box>
          <Box>
            <TextWithIcon icon={FiStar}>{repository.stargazers_count || 0}</TextWithIcon>
          </Box>
        </Box>
      </Flex>

      <Flex marginTop={repository.license || repository.language ? 1 : 0}>
        <TextWithIcon icon={GoLaw}>{repository.license?.name}</TextWithIcon>
        <Spacer />
        <Box>
          {repository.language && (
            <Badge colorScheme='white' border='1px' borderStyle='solid' borderColor='gray.200'>
              {repository.language}
            </Badge>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}
