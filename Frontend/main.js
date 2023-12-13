import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { response } from 'express';

const handleImageUpload = () => {
    ImagePicker.showImagePicker({}, (response) => {
        if (response.didCancel) {
            console.log('Usuário cancelou o upload de imagem');
        } else if (response.error) {
            console.log('Erro ao fazer o upload de imagem:', response.error);
        } else {
            console.log('Imagem selecionada:', response.uri);
        }
    });
};

const MainScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Enviar Imagem"
        onPress={() => {
          // Adicione a lógica para enviar imagem aqui
        }}
      />
      <MapView>
      style={{ width: '100%', height: 300 }}
        initialRegion={{
          latitude: 0,
          longitude: 0, 
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        <Marker
          coordinate={{ latitude: 0, longitude: 0 }} 
          title="Marcador"
          description="Descrição do marcador"
        />
      </MapView>
    </View>
  );
};

export default MainScreen;