import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export const Profile = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Profile
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>Navegar</Text>
            </TouchableOpacity>
        </View>
    )
}