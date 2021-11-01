import { Flex } from '@chakra-ui/react'

export type TabContainerProps = {
  children: React.ReactNode
}

export const TabContainer = ({ children }: TabContainerProps): JSX.Element => {
  return (
    <Flex direction='column' background='gray.100' padding={3} rounded={6}>
      {children}
    </Flex>
  )
}
