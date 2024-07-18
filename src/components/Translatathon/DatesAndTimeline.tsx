import { Box, Flex, Heading, Text } from "@chakra-ui/react"

import { ButtonLink } from "@/components/Buttons"

const dates = [
  {
    title: 'Applications open',
    description: 'Fill out the application form to participate and compete for prizes',
    startDate: new Date('July 25, 2024'),
    endDate: new Date('August 8, 2024'),
    link: 'https://translatathon.paperform.co/',
    linkText: 'Apply link text',
  },
  {
    title: 'Workshops',
    description: 'Join our Discord to participate in onboarding calls and workshops and learn all about the Translatathon',
    startDate: new Date('August 5, 2024'),
    endDate: new Date('August 8, 2024'),
    link: 'https://discord.gg/ethereum-org',
    linkText: 'Join discord',
  },
  {
    title: 'Translations open',
    description: 'The translation period - translate as much or as little as you want',
    startDate: new Date('August 9, 2024'),
    endDate: new Date('August 18, 2024'),
    link: 'https://example.com', //TODO update link
    linkText: 'Translating link text',
  },
  {
    title: 'Evaluation period',
    description: 'Each participants translations are evaluated by professional reviewers to ensure they are human translations and meet the minimum quality threshold',
    startDate: new Date('August 19, 2024'),
    endDate: new Date('August 28, 2024'),
    link: null,
    linkText: null,
  },
  {
    title: 'Results announcement',
    description: 'Results announcement',
    startDate: new Date('August 29, 2024'),
    endDate: new Date('September 31, 2024'),
    link: null,
    linkText: null,
  },
]

export const DatesAndTimeline = () => {
  const todaysDate = new Date('August 9, 2024')

  return (
    <Flex direction="column" p={4}>
      {dates.map((date, index) => (
        <Flex
          key={index}
          borderLeft={'1px solid'}
          borderColor={ 
            index === dates.length-1
              ? 'transparent'
              : 'primary.base'
          }
          px={4}
          pb={ index === dates.length-1 ? 0 : 16}
          gap={4}
        >
          <Flex>
            <Box
              w={8}
              h={8}
              bg={
                todaysDate >= date.startDate && todaysDate <= date.endDate
                  ? "primary.base"
                  : "primary.lowContrast"
                }
              borderRadius="full"
              ml={-8}
            />
          </Flex>
          <Flex direction="column" gap={6}>
            <Flex
              h={8}
              bg={
                todaysDate >= date.startDate && todaysDate <= date.endDate
                  ? "primary.base"
                  : "primary.lowContrast"
              }
              borderRadius="full"
              px={4}
              alignItems="center"
              color={
                todaysDate >= date.startDate && todaysDate <= date.endDate
                  ? "background.base"
                  : "body.base"
              }
            >
              <Text>
                {date.startDate.toDateString()} - {date.endDate.toDateString()}
              </Text>
            </Flex>
            <Flex direction="column">
              <Heading as="h3" fontSize="2xl">
                {date.title}
              </Heading>
              <Text>
                {date.description}
              </Text>
            </Flex>
            {
              date.link && (
                <Flex>
                  <ButtonLink
                    href={date.link}
                    mt={2}
                    variant="outline"
                    isDisabled={
                      !(todaysDate >= date.startDate && todaysDate <= date.endDate)
                    }
                  >
                    {date.linkText}
                  </ButtonLink>
                </Flex>
              )
            }
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}