import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactButton from '../components/ContactButton';
import { SERVICES } from '../data/services';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.header}>
          <Text style={styles.logo}>BeautyApp</Text>
          <Text style={styles.subtitle}>Servicios de belleza en un solo lugar</Text>
        </View>

        <View style={styles.welcome}>
          <Text style={styles.welcomeTitle}>¡Hola! 👋</Text>
          <Text style={styles.welcomeText}>
            Encuentra el servicio de belleza que estás buscando de una manera rápida y sencilla.
          </Text>
          <Pressable
            style={styles.mainButton}
            onPress={() => router.push('/services')}
            accessibilityRole="button"
            accessibilityLabel="Ver todos los servicios"
          >
            <Text style={styles.mainButtonText}>Ver servicios</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Servicios destacados</Text>
        <View style={styles.servicesContainer}>
          {SERVICES.map((s) => (
            <Pressable
              key={s.id}
              style={styles.serviceCard}
              onPress={() => router.push({ pathname: '/service/[id]', params: { id: s.id } })}
              accessibilityRole="button"
              accessibilityLabel={`Ver información de ${s.title}`}
            >
              <Text style={styles.serviceIcon}>{s.icon}</Text>
              <Text style={styles.serviceTitle}>{s.title}</Text>
              <Text style={styles.serviceText}>{s.short}</Text>
              <Text style={styles.serviceAction}>Ver información →</Text>
            </Pressable>
          ))}
        </View>

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
  logo: { fontSize: 32, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 16 },
  welcome: { backgroundColor: '#F3E5F5', borderRadius: 20, padding: 20, marginBottom: 30 },
  welcomeTitle: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  welcomeText: { fontSize: 16, lineHeight: 24, marginBottom: 20 },
  mainButton: { backgroundColor: '#7B1FA2', paddingVertical: 14, borderRadius: 12, alignItems: 'center', minHeight: 48 },
  mainButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  servicesContainer: { gap: 15 },
  serviceCard: { backgroundColor: '#FFFFFF', padding: 18, borderRadius: 16, borderWidth: 1, borderColor: '#E5E5E5' },
  serviceIcon: { fontSize: 30, marginBottom: 8 },
  serviceTitle: { fontSize: 19, fontWeight: 'bold', marginBottom: 5 },
  serviceText: { fontSize: 15, lineHeight: 21 },
  serviceAction: { fontSize: 14, fontWeight: 'bold', color: '#7B1FA2', marginTop: 8 },
  contactSection: { marginTop: 30, padding: 20, alignItems: 'center' },
  contactTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
});