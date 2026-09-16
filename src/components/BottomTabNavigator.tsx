import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface Props {
  activeTab: 'editor' | 'files' | 'settings';
  onTabChange: (tab: 'editor' | 'files' | 'settings') => void;
}

const BottomTabNavigator: React.FC<Props> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'editor', icon: '✏️', label: 'Editor' },
    { id: 'files', icon: '📁', label: 'Files' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            activeTab === tab.id && styles.activeTab,
          ]}
          onPress={() => onTabChange(tab.id as 'editor' | 'files' | 'settings')}
        >
          <Text style={styles.icon}>{tab.icon}</Text>
          <Text
            style={[
              styles.label,
              activeTab === tab.id && styles.activeLabel,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2d2d2d',
    borderTopWidth: 1,
    borderTopColor: '#444',
    height: 70,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  activeTab: {
    borderTopWidth: 3,
    borderTopColor: '#007acc',
  },
  icon: {
    fontSize: 20,
  },
  label: {
    color: '#999',
    fontSize: 12,
  },
  activeLabel: {
    color: '#007acc',
    fontWeight: 'bold',
  },
});

export default BottomTabNavigator;
