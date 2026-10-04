import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactButton from '../../components/ContactButton';
import { SERVICES } from '../../data/services';

export default function ServiceDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => router.back()}
        accessibilityRole="button"
        accessibilityLabel="Volver a la pantalla anterior"
      >
        <Text style={styles.backText}>← Volver</Text>
      </Pressable>

      {!service ? (
        <View style={styles.box}>
          <Text style={styles.title}>No encontramos este servicio</Text>
          <Text style={styles.text}>Vuelve atrás y elige otro de la lista.</Text>
        </View>
      ) : (
        <>
          <View style={styles.box}>
            <Text style={styles.icon}>{service.icon}</Text>
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.text}>{service.detail}</Text>
            <Text style={styles.price}>{service.price}</Text>
            <Text style={styles.text}>Para: {service.audience}</Text>
          </View>

          <View style={styles.contact}>
            <ContactButton label="📱 Solicitar cita" />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8FB', padding: 20 },
  backButton: { minHeight: 48, minWidth: 48, justifyContent: 'center', marginBottom: 10 },
  backText: { fontSize: 18, fontWeight: '600' },
  box: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 24, alignItems: 'center', borderWidth: 1, borderColor: '#E5E5E5' },
  icon: { fontSize: 56, marginBottom: 10 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  text: { fontSize: 17, lineHeight: 24, textAlign: 'center', marginBottom: 8 },
  price: { fontSize: 24, fontWeight: 'bold', color: '#7B1FA2', marginVertical: 10 },
  contact: { marginTop: 25, alignItems: 'center' },
});