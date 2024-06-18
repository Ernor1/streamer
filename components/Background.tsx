// Background.tsx
import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

interface BackgroundProps extends ViewProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B', // Set your desired global background color here
  },
});

export default Background;
