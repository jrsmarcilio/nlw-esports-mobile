import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logoImg from '../../assets/480px-Google_Contacts_icon.svg.png';
import { RegisterProps } from '../Register';
import { styles } from './styles';

export function Home() {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");
  const onSubmit = () => console.log(username, password);

  const navigation = useNavigation();
  
  function handleOpenRegister({ username, password }: RegisterProps) {
    navigation.navigate('register', { username, password });
  }

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <View>
        <Text style={styles.label}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="your username"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="your password"
        />

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleOpenRegister({ username, password })}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}