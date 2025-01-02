import { Typography } from "@components/Typhography";
import { Centered, Container, ModalView, Row } from "./styles";
import { StyleSheet } from "react-native";
import { Button } from "@components/Button";

type ModalProps = {
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    onAction?: () => void,
}

export function Modal({modalVisible = false, setModalVisible, onAction}: ModalProps) {
    return (
        <Container animationType="fade" transparent={true} visible={modalVisible}  >
            <Centered >
                <ModalView >
                    <Typography fontFamily="bold" fontSize="title_sm" textAlign="center">Deseja realmente excluir o registro da refeição?</Typography>
                    
                    <Row >
                        <Button title="Cancelar" type="outline" onPress={() => setModalVisible(!modalVisible)} style={{width: '48%', marginRight: 6}} />
                        <Button title="Sim, excluir" onPress={onAction} style={{width: '48%', marginLeft: 6}} />
                    </Row>
                </ModalView>
            </Centered>
        </Container>
    )
}