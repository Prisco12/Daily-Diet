import { Typography } from "@components/Typhography";
import { Container } from "./styles";
import { Image } from "react-native";
import illustrationHappy from '@assets/illustration-happy.png'
import illustrationSad from '@assets/illustration-sad.png'
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";

type RouteParams = { isOnTheDiet: boolean }

export function FeedbackScreen() {
    const navigator = useNavigation()
    const route = useRoute()

    const { isOnTheDiet } = route.params as RouteParams

    function handleGoHome() {
        navigator.navigate('home')
    }
    return (
        <Container>
            {isOnTheDiet ?
                (
                    <>
                        <Typography textAlign="center" color="green_dark" fontSize="title_md" fontFamily="bold" lineHeight="lg">
                            Continue assim!
                        </Typography>
                        <Typography textAlign="center" style={{ marginTop: 8, marginBottom: 40 }}>
                            Você continua{' '}
                            <Typography fontFamily="bold">dentro da dieta</Typography>{' '}
                            Muito bem!
                        </Typography>
                        <Image source={illustrationHappy} />
                    </>
                ) : (
                    <>
                        <Typography textAlign="center" color="red_dark" fontSize="title_md" fontFamily="bold" lineHeight="lg">
                            Que pena!
                        </Typography>
                        <Typography textAlign="center" style={{ marginTop: 8, marginBottom: 40 }}>
                            Você{' '}
                            <Typography fontFamily="bold">saiu da dieta</Typography>{' '}
                            dessa vez, mas continue se esforçando e não desista!
                        </Typography>
                        <Image source={illustrationSad} />
                    </>
                )
            }
            <Button title="Ir para página inicial" style={{ marginTop: 32, width: '60%' }} onPress={handleGoHome} />
        </Container>
    )
}