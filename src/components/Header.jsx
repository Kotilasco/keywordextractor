import { Heading, Image, Text } from "@chakra-ui/react"
import logo from '../assets/lightbulb.jpg'

const Header = () => {
  return (
    <>
      <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
      <Heading color='white' marginBottom='1rem'>
        Kuly Keyword Extrator
      </Heading>
      <Text fontSize={25} textAlign='center'>
        Paste in your text below and we'll extract keywords for you
      </Text>
    </>
  )
}

export default Header
