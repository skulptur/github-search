import { Flex, Heading, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Trending } from './components/Trending'
import { Saved } from './components/Saved'
import { About } from 'components/About'
import { TabContainer } from 'components/General/TabContainer'

export const App = (): JSX.Element => {
  return (
    <Flex height='100vh' paddingLeft={5} paddingRight={5} alignItems='center' direction='column'>
      <Heading marginTop={50} marginBottom={6}>
        Popular Repositories
      </Heading>
      <Text marginBottom={10}>View trending repositories on Github and keep up-to-date with the best projects!</Text>

      <Tabs maxWidth='700px'>
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
              <About />
            </TabContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}
