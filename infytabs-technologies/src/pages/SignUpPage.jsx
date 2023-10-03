'use client'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import axios from 'axios';

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [profile_url,setProfileUrl] = useState("");
    const [mobile_no,setMobileNo] = useState("");

    const postData = async () => {
        const payload = {name,email,password,profile_url,mobile_no};
        if(name && email && password && profile_url && mobile_no){
            try {
                const data = await axios.post(`http://localhost:17000/auth/register`,payload);
                if(data.statusText == "OK"){
                    alert("User registerd successfully");
                }
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }else{
            console.log("enter all fields");
        }
    }

    console.log(name);
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="firstName" isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input w={"300px"} type="text" onChange={(e) => setName(e.target.value)} value={name} />
                        </FormControl>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} value={password} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl id="profileUrl" isRequired>
                            <FormLabel>Profile Url</FormLabel>
                            <Input type="text" onChange={(e) => setProfileUrl(e.target.value)} value={profile_url} />
                        </FormControl>
                        <FormControl id="mobileno" isRequired>
                            <FormLabel>Mobile No</FormLabel>
                            <Input type="number" onChange={(e) => setMobileNo(e.target.value)} value={mobile_no} />
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                onClick={() => postData()}
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}