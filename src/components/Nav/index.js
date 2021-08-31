import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export default function WithSubnavigation(props) {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text> */}

          <Image
            src={'https://www.greenpeace.org/global/static/img/gp-logo.svg'}
            maxW={'120px'}
          />

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav
              illustrationSection={props.illustrationSection}
              imageSection={props.imageSection}
              testimonials={props.testimonials}
            />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          {/* <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#66cc00'}
            href={'#'}
            _hover={{
              bg: 'green.300',
            }}>
            捐款支持
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav
          isOpen={isOpen}
          onToggle={onToggle}
          illustrationSection={props.illustrationSection}
          imageSection={props.imageSection}
          testimonials={props.testimonials}
        />
      </Collapse>
    </Box>
  )
}

const DesktopNav = ({ illustrationSection, imageSection, testimonials }) => {
  const NAV_ITEMS = [
    {
      label: '公眾諮詢',
      href: '#',
      ref: testimonials,
    },
    {
      label: '了解更多',
      href: '#',
      ref: imageSection,
    },
    {
      label: '捐助支持',
      href: '#',
      ref: illustrationSection,
    },
  ]
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  return (
    <Stack direction={'row'} spacing={8}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            fontSize={'sm'}
            color={linkColor}
            onClick={() =>
              navItem.ref.current.scrollIntoView({ behavior: 'smooth' })
            }
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
              cursor: 'pointer',
            }}
          >
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = ({
  illustrationSection,
  imageSection,
  testimonials,
  isOpen,
  onToggle,
}) => {
  const NAV_ITEMS = [
    {
      label: '公眾諮詢',
      href: '#',
      ref: testimonials,
    },
    {
      label: '了解更多',
      href: '#',
      ref: imageSection,
    },
    {
      label: '捐助支持',
      href: '#',
      ref: illustrationSection,
    },
  ]
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <Stack
          key={navItem.label}
          spacing={4}
          onClick={() => {
            onToggle()
            navItem.ref.current.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <Flex
            py={2}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Text fontWeight={600}>{navItem.label}</Text>
          </Flex>
        </Stack>
      ))}
    </Stack>
  )
}
//navItem.ref.current.scrollIntoView({ behavior: 'smooth' })
// const MobileNavItem = ({ label, navItem }) => {
//   const { isOpen, onToggle } = useDisclosure();
//   return (
//     <Stack spacing={4} onClick={()=>console.log('-',isOpen)}>
//       <Flex
//         py={2}
//         justify={'space-between'}
//         align={'center'}
//         _hover={{
//           textDecoration: 'none',
//         }}>
//         <Text
//           fontWeight={600}
//           color={useColorModeValue('gray.600', 'gray.200')}>
//           {navItem.label}
//         </Text>
//       </Flex>
//     </Stack>
//   );
// };
