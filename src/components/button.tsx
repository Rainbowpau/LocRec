import { Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {backgroundColor: '#2296fd', borderRadius: 20, padding: 10, alignItems: 'center', alignSelf: 'center', minWidth: 100},
    title: {color: 'white', fontSize: 16, fontWeight: 'bold'},
});
