import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import BadgeStyle from './style/index';
import BadgeProps from './PropsType';

export default class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    size: 'small',
    overflowCount: 99,
    corner: false,
    dot: false,
    styles: BadgeStyle,
  };

  render() {
    const {size, overflowCount, corner, dot, text, children, styles, style} = this.props;

    const overflowNum = overflowCount || 99;
    const badgeText = typeof text === 'number' && text > overflowNum ? `${overflowNum}+` : text;

    const badgeCls = corner ? 'textCorner' : 'textDom';

    return (
      <View style={[ styles.wrap, style ]}>
        <View style={ [styles[`${badgeCls}Wrap`]] }>
          {children}
          {
            !dot ? (
              <TouchableWithoutFeedback>
                <View style={ [styles[badgeCls], styles[`${badgeCls}${size}`]] }>
                  <Text style={ [styles.text] }>{badgeText}</Text>
                </View>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback>
                <View style={ [styles.dot, styles[`dotSize${size}`] ] } />
              </TouchableWithoutFeedback>
            )
          }

        </View>
      </View>
    );
  }
}
