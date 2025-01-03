/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = ({orientation = 'horizontal', coverPercent = '100%'}) => {
    return (
        <View style = {[
            orientation === 'vertical'
          ? { width: 1, height: coverPercent}
          : { height: 1, width: coverPercent},
           style.divider]}/>
    );
};

const style = StyleSheet.create({
    divider: {
        backgroundColor: '#E9EFF1',
    },
});

export default Divider;
