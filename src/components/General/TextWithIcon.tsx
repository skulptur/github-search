import { Flex, Icon, Text } from '@chakra-ui/react'

export type TextWithIconProps = {
  children: React.ReactNode
  icon: React.ComponentProps<typeof Icon>['as']
}

export const TextWithIcon = ({ icon, children }: TextWithIconProps): JSX.Element | null => {
  if (!children) return null

  return (
    <Flex>
      <Icon as={icon} />{' '}
      <Text marginLeft={1} fontSize='sm'>
        {children}
      </Text>
    </Flex>
  )
}
