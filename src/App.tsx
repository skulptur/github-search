import { Flex, Box, Heading, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Trending } from './components/Trending'
import { Saved } from './components/Saved'
import { About } from 'components/About'
import { TabContainer } from 'components/General/TabContainer'
import { breakpoints } from './breakpoints'

export const App = (): JSX.Element => {
  return (
    <Tabs>
      <Flex height='100vh' alignItems='center' direction='column'>
        <Flex as='header' alignItems='center' direction='column'>
          <Heading marginTop={50} marginBottom={6}>
            Popular Repositories
          </Heading>
          <Text marginBottom={10}>
            View trending repositories on Github and keep up-to-date with the best projects!
          </Text>

          <TabList>
            <Tab>Trending</Tab>
            <Tab>Saved</Tab>
            <Tab>About</Tab>
          </TabList>
        </Flex>

        <Flex
          as='section'
          justifyContent='center'
          flexGrow={1}
          overflow='auto'
          paddingLeft={5}
          paddingRight={5}
          background='gray.200'
          width='100%'
        >
          <Box maxWidth={{ md: breakpoints.md }} width={{ sm: '100%' }}>
            <TabPanels>
              <TabPanel>
                <TabContainer>
                  <Trending />
                </TabContainer>
              </TabPanel>
              <TabPanel>
                <TabContainer>
                  <Saved />
                </TabContainer>
              </TabPanel>
              <TabPanel>
                <TabContainer>
                  <About />
                </TabContainer>
              </TabPanel>
            </TabPanels>
          </Box>
        </Flex>
      </Flex>
    </Tabs>
  )
}
