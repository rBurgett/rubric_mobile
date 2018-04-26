import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';
import PropTypes from 'prop-types';
import shader from 'shader';

const lightColor = '#f1f2e0';
const darkColor = '#683b11';

export default class HeaderComponent extends Component {
    render() {

        const { back = false } = this.props;

        return (
            <Header
                androidStatusBarColor={shader(lightColor, -.2)}
                iosBarStyle={'default'}
                style={styles.header}>
                <Left>
                    {back ?
                        <Button
                            transparent={true}
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon style={styles.icon} name={'arrow-back'} />
                        </Button>
                        :
                        <Button
                            transparent={true}
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            <Icon style={styles.icon} name={'menu'} />
                        </Button>
                    }
                </Left>
                <Body>
                <Title style={styles.title}>Rubric.Church</Title>
                </Body>
            </Header>
        );
    }
}
HeaderComponent.propTypes = {
    back: PropTypes.bool,
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: lightColor
    },
    icon: {
        color: darkColor
    },
    title: {
        color: darkColor
    }
});
