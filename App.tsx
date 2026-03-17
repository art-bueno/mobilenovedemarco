
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { morningSchedule, nightSchedule, ScheduleItem as ScheduleItemType } from './mocks/ScheduleData';
import { ScheduleItem } from './components/scheduleItem';

function MainContent() {
  const insets = useSafeAreaInsets();
  const [isNightPeriod, setIsNightPeriod] = useState(false);
  const [search, setSearch] = useState('');

  const schedules = isNightPeriod ? nightSchedule : morningSchedule;

  const filteredSchedules = schedules.filter((item) =>
    item.subject.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: ScheduleItemType }) => (
    <ScheduleItem item={item} />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.statusBarBackground, { height: insets.top }]} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 20 }]}
      >
        <View style={styles.header}>
          <Image
            source={require('./assets/fiapIMG.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Bem vindo ao FIAPP</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />

        <TouchableOpacity>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>









        <TouchableOpacity style={styles.button} onPress={() => setSearch('')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.microsoftButton}>
          <View style={styles.microsoftContent}>
            
            <Text style={styles.microsoftText}>Entrar com Microsoft</Text>
            <Image
              source={require('./assets/MsIcon.webp')}
              style={styles.microsoftIcon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Criar conta</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <MainContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    backgroundColor: '#ED145B',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ED145B',
  },
  subtitle: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#ED145B',
    paddingTop: 10,
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#fff',
    borderWidth: 2,
    borderColor: '#ED145B',
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 10,
  },
  currentPeriod: {
    fontSize: 18,
    color: '#ED145B',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 10,
  },
  emptyMessage: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 30,
  },
  button: {
    backgroundColor: '#ED145B',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: "#ff007f",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
  microsoftButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  microsoftText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  microsoftContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  microsoftIcon: {
    width: 80,
    height: 80,
    marginLeft: 15,
  },

});

