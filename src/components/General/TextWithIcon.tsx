import { Flex, Icon, Text } from '@chakra-ui/react'

export type TextWithIconProps = {
  children: React.ReactNode
  icon: React.ComponentProps<typeof Icon>['as']
  marginLeft?: React.ComponentProps<typeof Flex>['marginLeft']
}

export const TextWithIcon = ({ icon, children, marginLeft }: TextWithIconProps): JSX.Element | null => {
  if (children === null || children === undefined) return null

  return (
    <Flex marginLeft={marginLeft}>
      <Icon as={icon} />{' '}
      <Text marginLeft={1} fontSize='sm'>
        {children}
      </Text>
    </Flex>
  )
}
