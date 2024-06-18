import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ViewProps } from 'react-native';
interface BackgroundProps extends ViewProps {
    children: React.ReactNode;
  }

const GradientBackground:React.FC<BackgroundProps> = ({ children }) => (
  <View style={styles.container}>
    <LinearGradient
      colors={['#0172B2', '#001645']} 
      style={styles.gradient}
    />
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default GradientBackground;