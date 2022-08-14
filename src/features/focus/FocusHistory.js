import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

const HistoryItem = ({ item, index }) => {
  return (
    <Text style={styles.HistoryItem(item.status)}>
      {JSON.stringify(item.subject)}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        <Text style={styles.title}>Things we focus on</Text>
        {!!focusHistory.length  && (
          <>
            
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <TouchableOpacity
                style={styles.radiusClose}
                onPress={() => onClear()}>
                <Text style={styles.text}>clear</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  HistoryItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    //if the status is greter than 1 then red otherwise green
    fontSize: fontSizes.lg,
  }),
  title: {
    color: 'white',
    //if the status is greter than 1 then red otherwise green
    fontSize: fontSizes.lg,
  },
  radiusClose: {
    borderRadius: 40,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  text: {
    color: '#fff',
    fontSize: 25,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
