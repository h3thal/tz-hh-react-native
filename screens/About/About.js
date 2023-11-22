import React, {useCallback} from 'react';
import {
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import avatar from '../../assets/img/avatar.jpeg';
import CONSTANTS from '../../assets/CONSTANTS';

const About = () => {
  const onPress = useCallback(() => {
    Linking.openURL(
      'https://hh.ru/resume/6e4810a9ff0512fe7d0039ed1f685375706f54',
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerInner}>
          <Text style={styles.title}>React-native developer</Text>
          <View style={styles.row}>
            <Image source={avatar} style={styles.avatar} borderRadius={35} />
            <View>
              <Text style={styles.name}>Зиновьев</Text>
              <Text style={styles.name}>Алексей</Text>
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.row}>
              <Text style={styles.text}>Возраст:</Text>
              <Text style={styles.text}>23 года</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Город:</Text>
              <Text style={styles.text}>Москва</Text>
            </View>
          </View>
          <Button
            title={'Резюме на hh.ru'}
            style={styles.button}
            color={'#5e7fc6ff'}
            onPress={onPress}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4f9adcff',
    flex: 1,
  },
  containerInner: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'column',
    gap: 15,
  },
  title: {
    color: CONSTANTS.textColor,
    fontSize: CONSTANTS.titleTextSize,
    textAlign: 'center',
  },
  avatar: {
    height: 125,
    width: 125,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: CONSTANTS.textColor,
    fontSize: 30,
  },
  info: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 30,
  },
  text: {
    color: CONSTANTS.textColor,
    fontSize: CONSTANTS.textSize,
  },
  button: {
    backgroundColor: 'red',
  },
});

export default About;
