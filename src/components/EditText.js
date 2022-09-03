//
//  index.js:
//  BoilerPlate
//
//  Created by Retrocube on 10/4/2019, 9:27:23 AM.
//  Copyright © 2019 Retrocube. All rights reserved.
//

import React, {Component} from 'react';
import {
  Text,
  Platform,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTFAMILY, SIZES} from '../constants';
import {Icon, IconType} from '../components';

export default class EditText extends Component {
  static defaultProps = {
    placeholder: '',
    value: '',
    style: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      val: props.value ? props.value : '',
      maxHeight: 0,
      minHeight: 52,
      expanded: false,
      icon: 'eye',
      showText: true,
    };
  }

  _animatedIsFocused = new Animated.Value(this.props.value == '' ? 0 : 1);
  animation = new Animated.Value(0);

  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this.validate);
    }
    this.animation.setValue(this.state.minHeight);
  }

  handleFocus = () => {
    this.animate(1);
  };
  handleBlur = () => this.animate(this.props.value ? 1 : 0);
  animate = toValue => {
    Animated.timing(this._animatedIsFocused, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.animation, {
      toValue: this.state.expanded
        ? 18 + this.state.minHeight
        : this.state.minHeight,
      useNativeDriver: false,
    }).start();
  };
  labelStyle = {
    position: 'absolute',
    top: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange:
        Platform.OS === 'android'
          ? [SIZES.fifteen, -SIZES.fifteen]
          : [-SIZES.fifteen * 1.2, -SIZES.twentyFive * 1.3],
    }),
    fontSize: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [SIZES.h16, SIZES.h16],
    }),
    color: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.textGrey, COLORS.textColor],
    }),
  };

  borderColorStyle = {
    borderColor: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.textGrey, COLORS.textColor],
    }),
    paddingBottom: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange:
        Platform.OS === 'ios'
          ? [SIZES.five / 2, SIZES.five * 1.2]
          : [SIZES.five / 2.2, SIZES.five * 1.1],
    }),
  };

  iconStyle = {
    color: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.textGrey, COLORS.purple],
    }),
  };

  borderStyle = {
    borderBottomWidth: 1,
  };

  focus = () => {
    this.textInput.focus();
  };

  setFocus = () => {
    this.textInput.focus();
  };

  render() {
    return (
      <Animated.View
        style={[
          {
            height: this.animation,
            marginVertical: SIZES.fifteen,
          },
        ]}>
        <Animated.View style={[this.borderColorStyle, styles.borderStyle]}>
          {/* {this.props.email && (
            <Icon
              name={'eye'}
              type={IconType.FontAwesome}
              style={[{fontSize: SIZES.twenty, color: COLORS.textGrey}]}
            />
          )} */}
          <Animated.Text
            style={[this.labelStyle, {paddingLeft: SIZES.fifteen}]}
            numberOfLines={1}>
            {this.props.label}
          </Animated.Text>
          <TextInput
            {...this.props}
            ref={ref => (this.textInput = ref)}
            style={[styles.txtInputStyle, this.props.style]}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={this.props.value}
            secureTextEntry={this.props.password ? this.state.showText : false}
            selectionColor={COLORS.primary}
            onChangeText={text => {
              this.props.onChangeText(text);
            }}
          />

          {this.props.password ? (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {
                if (this.state.icon === 'eye') {
                  this.setState({icon: 'eye-off', showText: false});
                } else {
                  this.setState({icon: 'eye', showText: true});
                }
              }}>
              <Icon
                name={this.state.icon}
                type={IconType.Feather}
                style={{
                  fontSize: SIZES.twenty,
                  color: COLORS.textGrey,
                  marginRight: 12,
                }}
              />
            </TouchableOpacity>
          ) : null}
        </Animated.View>
        {this.props.error ? (
          <Text
            style={{
              fontSize: SIZES.body10,
              color: COLORS.red,
              marginLeft: SIZES.twenty,
            }}>
            {this.props.errorMessage}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: SIZES.body10,
              color: COLORS.red,
              marginLeft: SIZES.twenty,
            }}>
            {' '}
          </Text>
        )}
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  txtInputStyle: {
    flex: 1,
    color: COLORS.white,
    alignSelf: 'stretch',
    fontSize: SIZES.h16,
    paddingLeft: SIZES.fifteen,
  },
  borderStyle: {
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
});
