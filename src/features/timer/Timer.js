import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  Platform,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

import { Countdown } from '../../components/Countdown';
import { Timing } from './Timing';

import { useKeepAwake } from 'expo-keep-awake'; //display on method

const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject, onTimerEnd,clearSubject }) => {
  useKeepAwake(); //display on method

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgressFuntion = (progress) => {
    setProgress(progress);
  };



  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
      //interval eka set karala setTimeOut eken eka given time ekakadi ain karnawa
      //ios wala mehama vibarate wenna ona welawa manuualy denna wenwa
    } else {
      //adnroid wala vaibrate wenna ona weala denna ona ne
      //but uda widiahtath karanna puluwan
      //Vibration.vibrate(2000);

      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 2000);
    }
  };
  const onEnd = () => {
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    vibrate();
    onTimerEnd();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgressFuntion}
          onEnd={onEnd}
        />
      </View>

      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing on :</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 10 }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <TouchableOpacity
            style={styles.radius}
            onPress={() => setIsStarted(false)}>
            <Text style={styles.text}>pause</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.radius}
            onPress={() => setIsStarted(true)}>
            <Text style={styles.text}>start</Text>
          </TouchableOpacity>
        )}
     
      </View>
         <View style={styles.clearSubject}>
          <TouchableOpacity
            style={styles.radiusClose}
            onPress={() => clearSubject()}>
            <Text style={styles.textClose}>-</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radius: {
    borderRadius: 80,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radiusClose: {
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  textClose: {
    color: '#fff',
    fontSize: 10,
  },
  clearSubject:{
    paddingBottom:25,
    paddingLeft:25,
  }
});
