import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { THEME } from '../../theme';
import logoImg from '../../assets/480px-Google_Contacts_icon.svg.png';
import { Heading } from '../../components/Heading';
import { useState } from 'react';

export interface RegisterProps {
	username: string
	password: string
}

export function Register() {
	const [username, onChangeUsername] = useState("");
	const [password, onChangePassword] = useState("");
	const onSubmit = () => console.log(username, password);

	const navigation = useNavigation();
	const router = useRoute();
	const register = router.params as RegisterProps;

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<SafeAreaView style={styles.container}>

			<View style={styles.header}>
				<TouchableOpacity onPress={handleGoBack}>
					<Entypo
						name="chevron-thin-left"
						color={THEME.COLORS.CAPTION_300}
						size={24}
					/>
				</TouchableOpacity>

				<Image
					source={logoImg}
					style={styles.logo}
				/>

				<View style={styles.right} />
			</View>

			<View>
				<Text style={styles.label}>Login</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChangeUsername}
					value={username}
					placeholder="your username"
				/>


				<Text style={styles.label}>Login</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChangePassword}
					value={password}
					placeholder="your password"
				/>

				<TouchableOpacity style={styles.button} onPress={onSubmit}>
					<Text>Log In</Text>
				</TouchableOpacity>

			</View>

		</SafeAreaView>
	);
}