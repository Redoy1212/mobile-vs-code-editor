# 📱 Mobile Code Editor

A VS Code-like code editor for mobile devices built with React Native and Expo.

## ✨ Features

- ✏️ **Code Editing** - Write and edit code with syntax highlighting
- 💾 **Save & Load** - Save files to local storage and load them back
- 📁 **File Manager** - Create, view, and delete files
- ⚙️ **Settings** - Customize your editor experience
- 🌙 **Dark Mode** - VS Code-inspired dark theme
- 📱 **Mobile Optimized** - Works on iOS and Android

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

```bash
# Clone the repository
git clone https://github.com/Redoy1212/mobile-vs-code-editor.git
cd mobile-vs-code-editor

# Install dependencies
npm install

# Start the app
npm start
```

### Running on Device

```bash
# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## 📂 Project Structure

```
mobile-vs-code-editor/
├── App.tsx
├── app.json
├── package.json
└── src/
    ├── screens/
    │   ├── CodeEditorScreen.tsx
    │   ├── FileManagerScreen.tsx
    │   └── SettingsScreen.tsx
    └── components/
        └── BottomTabNavigator.tsx
```

## 🎨 Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **TypeScript** - Type-safe development
- **expo-file-system** - File system access

## 📝 Usage

1. **Editor Tab**: Write your code in the text editor
2. **Save**: Click the Save button to store your file
3. **Files Tab**: Manage your project files
4. **Settings Tab**: Customize editor preferences

## 🛠️ Future Enhancements

- [ ] Syntax highlighting with language support
- [ ] Git integration
- [ ] Code formatting
- [ ] Integrated terminal
- [ ] Plugin system
- [ ] Cloud sync

## 📄 License

MIT License - feel free to use this project!

## 👨‍💻 Author

Created by Redoy1212

---

**Happy Coding! 🚀**
