import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, List, ListItem, Text } from 'native-base';

const routes = [
    { route: 'Home', displayName: 'Home'},
    { route: 'Teachings', displayName: 'Teachings'},
    { route: 'Bible', displayName: 'Bible' },
    { route: 'About', displayName: 'About' },
    { route: 'Settings', displayName: 'Settings' }
];

export default class Sidebar extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image style={styles.image} source={require('../../images/rubric.church.png')} />
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button={true}
                                    onPress={() => this.props.navigation.navigate(data.route)}>
                                    <Text>{data.displayName}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }

}
Sidebar.propTypes = {
    navigation: PropTypes.object
};

const imageWidth = 320;
const styles = StyleSheet.create({
    image: {
        alignSelf: 'stretch',
        width: null,
        height: (630 * imageWidth) / 1200
    }
});
