import React from 'react';
import { View, Text, Image } from 'react-native';
export default class CardHeader extends React.Component {
    render() {
        const { title, thumb, thumbStyle, extra, style, styles } = this.props;
        const titleDom = React.isValidElement(title) ? (<View style={{ flex: 1 }}>{title}</View>) : (<Text style={styles.headerContent}>{title}</Text>);
        const extraDom = React.isValidElement(extra) ? (<View style={{ flex: 1 }}>{extra}</View>) : (<Text style={[styles.headerExtra]}>{extra}</Text>);
        return (<View style={[styles.headerWrap, style]}>
        <View style={[styles.headerTitle]}>
          {thumb ? <Image source={{ uri: thumb }} style={[styles.headerImage, thumbStyle]}/> : null}
          {titleDom}
        </View>
        {extra ? extraDom : null}
      </View>);
    }
}
CardHeader.defaultProps = {
    thumbStyle: {},
    style: {},
};
