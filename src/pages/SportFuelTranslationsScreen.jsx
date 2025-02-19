import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import SportFuelHeader from '../components/SportFuelHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <SportFuelHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Chess Candidates', '05.09 13:00', 'Magnus Carlsen \n' + 'Fabiano Caruana')}
        {renderBroadcast('Chess CHAMP', '07.09 15:30', 'Ding Liren \n' + 'Ian Nepomniachtchi')}
        {renderBroadcast('Poker WSOP', '09.09 19:45', 'Final Table')}
        {renderBroadcast('Darts', '11.09 18:00', 'Michael Smith \n' + 'Gerwyn Price')}
        {renderBroadcast('Tennis', '13.09 14:45', 'Fan Zhendong \n' + 'Ma Long')}
        {renderBroadcast('Go World', '15.09 12:30', 'Shin Jin-seo \n' + 'Ke Jie')}
        {renderBroadcast('Bridge', '17.09 16:15', 'USA \n' + 'France')}
        {renderBroadcast('Backgammon', '19.09 14:00', 'Turkey \n' + 'Norway')}
        {renderBroadcast('Scrabble', '21.09 17:30', 'Nigeria \n' + 'UK')}
        {renderBroadcast('Chess.com', '23.09 19:00', 'Hikaru Nakamura \n' + 'Alireza Firouzja')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 25,
  },
  league: {
    fontSize: 28,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
