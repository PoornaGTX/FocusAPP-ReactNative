import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Timing = () => {
  return (
    <>
      <View style={styles.timingButton}>
        <TouchableOpacity style={styles.radius} onPress={() => changeTime(10)}>
          <Text style={styles.text}>10</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timingButton}>
        <TouchableOpacity style={styles.radius} onPress={() => changeTime(15)}>
          <Text style={styles.text}>15</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timingButton}>
        <TouchableOpacity style={styles.radius} onPress={() => changeTime(20)}>
          <Text style={styles.text}>20</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  radius: {
    borderRadius: 80,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  timingButton: {
    flex: 1,

    alignItems: 'center',
  },
});
