import { Layout } from "@components/Layout";
import { Container, Form, Row } from "./styles";
import { Typography } from "@components/Typhography";
import { Input } from "@components/Input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { uuid } from "@utils/uuid";
import { Alert } from "react-native";
import { mealCreate } from "@storage/meal/mealCreate";

export function RegisterScreen() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [isOnTheDiet, setIsOnTheDiet] = useState(true);

    const navigation = useNavigation()
    
    function goBack() {
        navigation.goBack()
    }

    const alertError = (message: string) => Alert.alert("Nova refeição", message)

    async function handleSubmit() {
        try {
            const data = {
                id: uuid(),
                name: name.trim(),
                description: description.trim(),
                date,
                hour,
                isOnTheDiet
            }

            if (name.trim().length === 0) {
                return alertError("Informe o nome da refeição")
            }
    
            if (description.trim().length === 0) {
                return alertError("Informe a descrição da refeição")
            }
    
            if (date.trim().length === 0) {
                return alertError("Informe a data da refeição")
            }
    
            if (date.length < 10) {
                return alertError("O formato da data não é válida.");
            }
    
            if (hour.trim().length === 0) {
                return alertError("Informe a hora da refeição.");
            }
        
              if (hour.length < 5) {
                return alertError("O formato da hora não é válido.");
            }

            await mealCreate(data)

            navigation.navigate('home')
        } catch (error) {
            alertError("Erro ao cadastrar refeição")
        }
        
    }

    return (
        <Container>
             <Layout header={'Nova Refeição'} bg="gray" onPressBrack={goBack}>
                
                <Form>
                    <Row>
                        <Input 
                            label="Nome" 
                            value={name} 
                            placeholder="Nome da refeição" 
                            onChangeText={(text) => setName(text)}/>
                    </Row>
                    <Row>
                        <Input 
                            label="Descrição"
                            height={110}
                            value={description}
                            placeholder="Descrição da refeição" 
                            style={{ textAlignVertical: 'top'}} 
                            multiline={true} 
                            numberOfLines={4} 
                            maxLength={120}
                            errorMessage="Descrição da refeição é obrigatória"
                            onChangeText={(text) => setDescription(text)}/>
                    </Row>

                    <Row>
                        <Input 
                            label="Data"
                            value={date}
                            mask="date" 
                            keyboardType="numeric" 
                            placeholder="dd/mm/aaaa" 
                            style={{width: "99%", marginRight: 2}}
                            onInputMaskChange={(text: string) => setDate(text)}/>
                        <Input 
                            label="Hora" 
                            value={hour}
                            mask="hour" 
                            keyboardType="numeric" 
                            placeholder="HH:mm" 
                            style={{width: "99%", marginLeft: 2}}
                            onInputMaskChange={(text: string) => setHour(text)}/>
                    </Row>

                    <Row>
                        <Typography fontSize="title_xs" fontFamily="bold">
                        Está na dieta?
                        </Typography>
                    </Row>

                    <Row>
                        <Select 
                            title="Sim"
                            isSelected={isOnTheDiet}
                            bg="green"
                            onPress={() => setIsOnTheDiet(true && true)}
                            style={{width: '48%'}}
                        />
                        <Select 
                            title="Não"
                            isSelected={!isOnTheDiet}
                            bg="red"
                            onPress={() => setIsOnTheDiet(false && false)}
                            style={{width: '48%'}}
                        />
                    </Row>
                </Form>
                <Button 
                    title="Cadastrar Refeição"
                    onPress={handleSubmit}
                />
             </Layout>
        </Container>
    )
}