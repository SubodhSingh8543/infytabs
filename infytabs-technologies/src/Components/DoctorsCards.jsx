import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";

const DoctorCards = ({el}) => {

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image h={"200px"}
                    src={el.profile_url}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{el.description}</Heading>
                    <Text>
                       <strong>Name: </strong> {el.name}
                    </Text>
                    <Text >
                    <strong>Email: </strong> {el.email}
                    </Text>
                    <Text>
                    <strong>Contact No: </strong> {el.mobile_no}
                    </Text>
                    <Text><strong>Slots Available: </strong> {el.slotsavailable}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Book now
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default DoctorCards;