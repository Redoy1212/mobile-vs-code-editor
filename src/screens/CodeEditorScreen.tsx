import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';

const CodeEditorScreen = () => {
  const [code, setCode] = useState('// Write your code here...\n');
  const [fileName, setFileName] = useState('file.js');
  const [isSaved, setIsSaved] = useState(true);

  const saveFile = async () => {
    try {
      const fileUri = `${FileSystem.DocumentDirectory}${fileName}`;
      await FileSystem.writeAsStringAsync(fileUri, code);
      setIsSaved(true);
      alert('File saved: ' + fileName);
    } catch (error) {
      alert('Error saving file: ' + error);
    }
  };

  const loadFile = async () => {
    try {
      const fileUri = `${FileSystem.DocumentDirectory}${fileName}`;
      const content = await FileSystem.readAsStringAsync(fileUri);
      setCode(content);
      setIsSaved(true);
    } catch (error) {
      alert('Error loading file: ' + error);
    }
  };

  const handleCodeChange = (text: string) => {
    setCode(text);
    setIsSaved(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TextInput
          style={styles.fileNameInput}
          placeholder="Enter filename"
          placeholderTextColor="#999"
          value={fileName}
          onChangeText={setFileName}
        />
        <Text style={styles.statusText}>{isSaved ? '✓ Saved' : '● Unsaved'}</Text>
      </View>

      <TextInput
        style={styles.codeInput}
        multiline
        value={code}
        onChangeText={handleCodeChange}
        placeholder="Type your code here..."
        placeholderTextColor="#666"
        selectionColor="#007acc"
        scrollEnabled
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={saveFile}>
          <Text style={styles.buttonText}>💾 Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={loadFile}>
          <Text style={styles.buttonText}>📂 Load</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  fileNameInput: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    color: '#d4d4d4',
    padding: 10,
    borderRadius: 4,
    marginRight: 10,
  },
  statusText: {
    color: '#4ec9b0',
    fontWeight: 'bold',
  },
  codeInput: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: 12,
    fontFamily: 'Courier New',
    fontSize: 14,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  button: {
    backgroundColor: '#007acc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CodeEditorScreen;
