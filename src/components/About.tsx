import { Text, Link } from '@chakra-ui/react'

export const About = (): JSX.Element => {
  return (
    <>
      <Text paddingBottom={5}>
        This app displays trending repositories on github and allows you to save them. Saving will copy the repository
        information to localStorage and read from there instead of making new API calls. It uses the public Github API
        which is rate limited. In case of error, wait a minute and try again.
      </Text>
      <Text fontWeight='500'>Source:</Text>

      <Link href='https://github.com/skulptur/github-search' isExternal color='blue.500' fontWeight='500'>
        https://github.com/skulptur/github-search
      </Link>
    </>
  )
}
