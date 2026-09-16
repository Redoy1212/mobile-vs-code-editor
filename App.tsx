import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CodeEditorScreen from './src/screens/CodeEditorScreen';
import FileManagerScreen from './src/screens/FileManagerScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import BottomTabNavigator from './src/components/BottomTabNavigator';

export default function App() {
  const [activeTab, setActiveTab] = useState<'editor' | 'files' | 'settings'>('editor');

  const renderScreen = () => {
    switch (activeTab) {
      case 'editor':
        return <CodeEditorScreen />;
      case 'files':
        return <FileManagerScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <CodeEditorScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📱 Mobile Code Editor</Text>
      </View>
      <ScrollView style={styles.content}>
        {renderScreen()}
      </ScrollView>
      <BottomTabNavigator activeTab={activeTab} onTabChange={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    backgroundColor: '#007acc',
    padding: 16,
    marginTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
