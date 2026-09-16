import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import * as FileSystem from 'expo-file-system';

interface FileItem {
  name: string;
  uri: string;
}

const FileManagerScreen = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [newFileName, setNewFileName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      setLoading(true);
      const fileList = await FileSystem.readDirectoryAsync(FileSystem.DocumentDirectory || '');
      const fileItems: FileItem[] = fileList.map((name) => ({
        name,
        uri: `${FileSystem.DocumentDirectory}${name}`,
      }));
      setFiles(fileItems);
    } catch (error) {
      console.error('Error loading files:', error);
    } finally {
      setLoading(false);
    }
  };

  const createNewFile = async () => {
    if (!newFileName.trim()) {
      alert('Please enter a filename');
      return;
    }
    try {
      const fileUri = `${FileSystem.DocumentDirectory}${newFileName}`;
      await FileSystem.writeAsStringAsync(fileUri, '// New file\n');
      setNewFileName('');
      loadFiles();
      alert('File created: ' + newFileName);
    } catch (error) {
      alert('Error creating file: ' + error);
    }
  };

  const deleteFile = async (fileName: string) => {
    try {
      const fileUri = `${FileSystem.DocumentDirectory}${fileName}`;
      await FileSystem.deleteAsync(fileUri);
      loadFiles();
      alert('File deleted: ' + fileName);
    } catch (error) {
      alert('Error deleting file: ' + error);
    }
  };

  const renderFileItem = ({ item }: { item: FileItem }) => (
    <View style={styles.fileItem}>
      <Text style={styles.fileName}>📄 {item.name}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteFile(item.name)}
      >
        <Text style={styles.deleteButtonText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📁 File Manager</Text>

      <View style={styles.createContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter filename"
          placeholderTextColor="#999"
          value={newFileName}
          onChangeText={setNewFileName}
        />
        <TouchableOpacity style={styles.createButton} onPress={createNewFile}>
          <Text style={styles.createButtonText}>+ Create</Text>
        </TouchableOpacity>
      </View>

      {files.length === 0 ? (
        <Text style={styles.emptyText}>No files yet. Create one!</Text>
      ) : (
        <FlatList
          data={files}
          keyExtractor={(item) => item.name}
          renderItem={renderFileItem}
          scrollEnabled={false}
        />
      )}
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
    marginBottom: 16,
  },
  createContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    color: '#d4d4d4',
    padding: 10,
    borderRadius: 4,
  },
  createButton: {
    backgroundColor: '#007acc',
    paddingHorizontal: 16,
    borderRadius: 4,
    justifyContent: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  fileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2d2d2d',
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  fileName: {
    color: '#d4d4d4',
    fontSize: 14,
    flex: 1,
  },
  deleteButton: {
    padding: 8,
  },
  deleteButtonText: {
    fontSize: 16,
  },
  emptyText: {
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FileManagerScreen;
