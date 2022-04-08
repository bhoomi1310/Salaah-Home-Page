import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Center, Square, Circle
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
        <Text 
        fontWeight={700}
        lineHeight={1.2}
        color={'primary.400'} 
        fontSize='6xl'>
            SALAAH
        </Text>
          <Text
            color={'primary.400'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}>
            A proud family of more than 10K students
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'primary.100'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'primary.200' }}>
              Join Now
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}