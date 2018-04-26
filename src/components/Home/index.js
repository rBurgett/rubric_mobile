import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
import PropTypes from 'prop-types';
import Header from '../shared/Header';

const routes = [
    { route: 'Prayer', data: { time: 'morning' }, displayName: 'Morning Prayer' },
    { route: 'Devotion', displayName: 'Devotion' },
    { route: 'DailyReading', displayName: 'Daily Reading' },
    { route: 'Prayer', data: { time: 'afternoon' }, displayName: 'Noon Prayer' },
    { route: 'Prayer', data: { time: 'earlyEvening' }, displayName: 'Early Evening Prayer' },
    { route: 'Prayer', data: { time: 'closeOfDay' }, displayName: 'Close of Day Prayer' }
];

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header navigation={this.props.navigation} />
                <Content style={styles.content}>
                    {routes.map(({ route, data = {}, displayName }) => {
                        return (
                            <Button
                                style={styles.button}
                                light={true}
                                rounded={true}
                                block={true}
                                key={displayName}
                                onPress={() => this.props.navigation.navigate(route, data)}>
                                <Text>{displayName}</Text>
                            </Button>
                        );
                    })}
                </Content>
            </Container>
        );
    }

}
Home.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    content: {
        paddingTop: 15
    },
    button: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15
    }
});
