import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch } from 'react-native';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [fontSize, setFontSize] = useState<14 | 16 | 18>(14);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Auto Save</Text>
        <Switch value={autoSave} onValueChange={setAutoSave} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Font Size</Text>
        <View style={styles.fontSizeButtons}>
          {[14, 16, 18].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.fontSizeButton,
                fontSize === size && styles.fontSizeButtonActive,
              ]}
              onPress={() => setFontSize(size as 14 | 16 | 18)}
            >
              <Text style={styles.fontSizeButtonText}>{size}px</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>📱 Mobile Code Editor v1.0.0</Text>
        <Text style={styles.infoText}>✨ Features: Edit, Save, Load, File Management</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  title: {
    color: '#d4d4d4',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2d2d2d',
    padding: 16,
    marginBottom: 12,
    borderRadius: 4,
  },
  label: {
    color: '#d4d4d4',
    fontSize: 16,
    fontWeight: '500',
  },
  fontSizeButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  fontSizeButton: {
    backgroundColor: '#3e3e3e',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  fontSizeButtonActive: {
    backgroundColor: '#007acc',
  },
  fontSizeButtonText: {
    color: '#d4d4d4',
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: '#2d2d2d',
    padding: 16,
    borderRadius: 4,
    marginTop: 20,
  },
  infoText: {
    color: '#4ec9b0',
    fontSize: 14,
    marginBottom: 8,
  },
});

export default SettingsScreen;
