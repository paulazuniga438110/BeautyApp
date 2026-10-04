import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactButton from '../components/ContactButton';
import { SERVICES } from '../data/services';

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Volver a la pantalla anterior"
          >
            <Text style={styles.backText}>← Volver</Text>
          </Pressable>

          <Text style={styles.title}>Nuestros servicios</Text>
          <Text style={styles.subtitle}>Toca el servicio que quieres conocer</Text>
        </View>

        {SERVICES.map((s) => (
          <Pressable
            key={s.id}
            style={styles.card}
            onPress={() => router.push({ pathname: '/service/[id]', params: { id: s.id } })}
            accessibilityRole="button"
            accessibilityLabel={`Ver información de ${s.title}`}
          >
            <Text style={styles.icon}>{s.icon}</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{s.title}</Text>
              <Text style={styles.cardDescription}>{s.detail}</Text>
              <Text style={styles.cardAction}>Ver información →</Text>
            </View>
          </Pressable>
        ))}

        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>¿Quieres solicitar información?</Text>
          <ContactButton />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8FB' },
  content: { padding: 20, paddingBottom: 40 },
  header: { marginBottom: 25 },
  backButton: { minHeight: 48, minWidth: 48, justifyContent: 'center', marginBottom: 10 },
  backText: { fontSize: 18, fontWeight: '600' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16 },
  card: {
    backgroundColor: '#FFFFFF', borderRadius: 18, padding: 18, marginBottom: 15,
    flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E5E5E5',
  },
  icon: { fontSize: 38, marginRight: 15 },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  cardDescription: { fontSize: 15, lineHeight: 21, marginBottom: 8 },
  cardAction: { fontSize: 14, fontWeight: 'bold', color: '#7B1FA2' },
  contactSection: { marginTop: 20, alignItems: 'center' },
  contactTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
});