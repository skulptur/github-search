import { Flex, Box, Heading, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Trending } from './components/Trending'
import { Saved } from './components/Saved'
import { TabContainer } from 'components/General/TabContainer'

export const App = (): JSX.Element => {
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center' direction='column'>
      <Heading mb={6}>Popular Repositories</Heading>
      <Text mb={10}>View trending repositories on Github and keep up to date with the best projects!</Text>

      <Box width={600}>
        <Tabs>
          <TabList>
            <Tab>Trending</Tab>
            <Tab>Saved</Tab>
            <Tab>About</Tab>
          </TabList>
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
                <p>about</p>
              </TabContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  )
}
