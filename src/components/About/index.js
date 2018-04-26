import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import PropTypes from 'prop-types';
import Header from '../shared/Header';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Header navigation={this.props.navigation} />
                <Content>
                    <Text>About</Text>
                </Content>
            </Container>
        );
    }

}
About.propTypes = {
    navigation: PropTypes.object
};
