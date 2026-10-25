# React Native Learn — Expo & Cross-Platform Lab

<div align="center">

![React Native Learning Lab](docs/banner.svg)

### React Native & Expo learning repository covering component lifecycle, hooks, tabs navigation and cross-platform mobile patterns.

[![React Native](https://img.shields.io/badge/React%20Native-0.74+-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev)
[![Expo](https://img.shields.io/badge/Expo-51.x-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Router](https://img.shields.io/badge/Router-Expo%20Router%20v3-4630EB?style=flat-square)](https://docs.expo.dev/router/introduction/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

<br/>

<p align="center">
  <img src="docs/images/react-logo.png" width="100" alt="React Native Logo" />
</p>

</div>

---

## 📱 Overview

**React Native Learn** is an organized developer workbook documenting cross-platform mobile development with React Native, TypeScript, and Expo. It contains practical projects completed through the **Meta / Coursera React Native Specialization**, exploring declarative layouts with Flexbox, component lifecycle management, file-based routing with Expo Router, and performance optimization for iOS and Android.

---

## 📚 Curriculum & Module Breakdown

### 1. [Coursera Core Module](coursera/)
- **File-Based Routing**: Dynamic navigation hierarchies structured with Expo Router (`app/_layout.tsx`, `app/(tabs)/index.tsx`, `app/(tabs)/explore.tsx`).
- **Core Components & Layout**: In-depth usage of `View`, `Text`, `Image`, `FlatList`, `ScrollView`, and `StyleSheet.create`.
- **Custom Hooks**: Implementation of `useThemeColor` and `useColorScheme` for responsive light/dark adaptive palettes.
- **Themed Design Tokens**: Centralized typography and color values in `constants/Colors.ts`.
- **Platform Parity**: Uniform rendering and testing across Web, iOS Simulator, and Android Emulator.

---

## 🏛️ Directory Layout

```
react-native-learn/
├── coursera/             # Coursera React Native coursework project
│   ├── app/              # Expo Router tabs and modal screens
│   ├── components/       # Collapsible, ParallaxScrollView, ThemedView, ThemedText
│   ├── constants/        # App colors and styling tokens
│   ├── hooks/            # Custom React hooks (useThemeColor, useColorScheme)
│   └── package.json      # Dependencies and Expo CLI scripts
└── docs/                 # Documentation assets and vector banners
```

---

## 🚀 Running the Project

```bash
# 1. Clone repository
git clone https://github.com/ahmetkadircicek/react-native-learn.git
cd react-native-learn/coursera

# 2. Install dependencies
npm install

# 3. Start Expo development server
npx expo start

# 4. Open in iOS Simulator (press 'i'), Android Emulator (press 'a'), or Web (press 'w')
```

---

## 👨‍💻 Author

**Ahmet Kadir Çiçek**
- Website: [ahmetkadircicek.com.tr](https://ahmetkadircicek.com.tr)
- GitHub: [@ahmetkadircicek](https://github.com/ahmetkadircicek)
- LinkedIn: [in/akadircicek](https://www.linkedin.com/in/akadircicek)

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE).
