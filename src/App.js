import React from 'react';
import { AsyncStorage } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './components/Home';
import Bible from './components/Bible';
import Sidebar from './components/shared/Sidebar';
import Teachings from './components/Teachings';
import About from './components/About';
import Settings from './components/Settings';
import Prayer from './components/Prayer';
import PrayerService from './util/PrayerService';

PrayerService.getDailyPrayers()
    .then(prayers => {
        prayers
            .forEach(p => {
                AsyncStorage.setItem(`prayer-${p.time}`, p.text);
            });
    })
    .catch(err => console.error(err));

const AppRouter = DrawerNavigator(
    {
        Home: { screen: Home },
        Bible: { screen: Bible },
        Teachings: { screen: Teachings },
        About: { screen: About },
        Settings: { screen: Settings },
        Prayer: { screen: Prayer }
    },
    {
        contentComponent: props => <Sidebar {...props} />
    }
);

export default AppRouter;
