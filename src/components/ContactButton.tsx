import { Alert, Linking, Pressable, StyleSheet, Text } from 'react-native';
import { WHATSAPP_URL } from '../data/services';

type Props = { label?: string };

export default function ContactButton({ label = '📱 Contactar' }: Props) {
  const abrir = async () => {
    try {
      await Linking.openURL(WHATSAPP_URL);
    } catch {
      Alert.alert('No pudimos abrir WhatsApp', 'Intenta de nuevo o escríbenos directamente.');
    }
  };

  return (
    <Pressable
      style={styles.button}
      onPress={abrir}
      accessibilityRole="button"
      accessibilityLabel="Contactar por WhatsApp"
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#187A3C',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});