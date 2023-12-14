import axios from 'axios';
import { text } from 'express';
import React, { useState} from 'react';
import { View, Text, TextInput, Button} from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3043/login', {
                email,
                password,
            });
        } catch (error) {
            console.error('Erro ao fazer login:', error)
        }
    };

    const handleCadastro = () => {
        try {
            
            navigation.navigate('Main');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
        }
    };

    return (
        <View>
            <text>Identificador</text>
            <TextInput 
            placeholder='Email'
            onChangeText={(text) => setEmail(text)}
            value={email}
            />
            <text>Senha</text>
            <TextInput
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            />
            <button tittle="Login" onPress={handleLogin} />
            <button tittle="Cadastrar" onPress={handleCadastro} />
        </View>
    );
};

export default LoginScreen;