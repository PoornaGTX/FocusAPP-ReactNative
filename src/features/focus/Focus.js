import React, { useState } from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.innerConatainer}>
        <Text style={styles.title}>What would you like to foucs on ?</Text>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <TouchableOpacity
            style={styles.radiusClose}
            onPress={() => {
              addSubject(subject);
            }}>
            <Text style={styles.textEnter}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerConatainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  textInputStyle: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
   radiusEnter: {
    borderRadius: 40,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
    textEnter: {
    color: '#fff',
    fontSize: 25,
  },
});
