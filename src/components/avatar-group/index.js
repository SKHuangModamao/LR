/**
 * Created by yqf on 17/4/29.
 */


import React, { Component } from 'react';


import {

    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,

} from 'react-native';



export default class AvatarGroup extends Component {

    static defaultProps = {
        faceUrlPathsArray: ['/20161123/0812ea6fb237458e9c1331e2c6037402.jpg!50',
            '/20170731/8d244d700a644e5e9490d80f07c06a94.jpg!50',
            '/20170526/5657c46b0f0d4b4e972d27961e749aae.jpg!50'
        ]
    }

    getImagePath(path) {

        return path;
    }

    render() {

        const placeholder = 'https://img2.yiqifei.com/face.png!80';

        
        var count;

        var Members = [];

        var MembersCount = this.props.faceUrlPathsArray.length;


        if (MembersCount >= 4) {
            count = 4;
        }

        else if (MembersCount >= 3) {
            count = 3;
        }
        else if (MembersCount >= 2) {
            count = 2;
        }
        else {

            count = 1;
        }

        for (var i = 0; i < count; i++) {

            var Member = this.props.faceUrlPathsArray[i];

            if (Member == undefined || Member == null) {
                Member = placeholder;
            }
            else {
                Member = this.getImagePath(Member);
            }

            Members.push(Member);
        }



        if (count == 4) {
            return (


                <View style={{ backgroundColor: 'red', borderRadius: 3, margin: 0 ,}}>


                    <View style={{ flexDirection: 'row' }}>


                        <Image style={[styles.imageStyle,{borderTopLeftRadius:3,}]}
                            source={{ uri: (Members[0]) }}>
                        </Image>
                        <Image style={[styles.imageStyle, { borderTopRightRadius: 3, }]}
                            source={{ uri: (Members[1]) }}>
                        </Image>

                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <Image style={[styles.imageStyle, { borderBottomLeftRadius: 3, }]}
                            source={{ uri: (Members[2]) }}>
                        </Image>

                        <Image style={[styles.imageStyle, { borderBottomRightRadius: 3, }]}
                            source={{ uri: (Members[3]) }}>
                        </Image>

                    </View>


                </View>

            );
        }
        else if (count == 3) {

            return (


                <View style={{ backgroundColor: 'white', borderRadius: 3, flexDirection: 'row', margin: 0 }}>


                    <View style={{ flexDirection: 'row' }}>

                        <Image style={{ width: margin, height: margin * 2 }}
                            source={{ uri: (Members[0]) }} />

                    </View>


                     <View >

                        <Image style={[styles.imageStyle, { borderBottomLeftRadius: 3, }]}
                            source={{ uri: (Members[1]) }}>
                        </Image>

                        <Image style={[styles.imageStyle, { borderBottomRightRadius: 3, }]}
                            source={{ uri: (Members[2]) }}>
                        </Image>

                    </View>


                </View>

            );
        }


        else if (count == 2) {

            return (

                <View style={{ backgroundColor: 'white', borderRadius: 3, flexDirection: 'row', margin: margin / 2 }}>


                    <View style={{ flexDirection: 'row' }}>

                        <Image style={{ width: margin, height: margin * 2 }}
                            source={{ uri: (Members[0]) }} />

                    </View>

                    <View >


                        <Image style={{ width: margin, height: margin * 2 }}
                            source={{ uri: (Members[1]) }} />

                    </View>


                </View>

            );
        }



        else {


            return (




                <Image style={{ width: margin * 2, height: margin * 2, borderRadius: 3, margin: 0 }}
                    source={{ uri: Members[0] }}>
                </Image>


            );
        }


    }

}
var margin = 21;

const styles = StyleSheet.create(
    {

        imageStyle: {

            width: margin,
            height: margin,
            //margin: 0.5,
        },

        flex: {
            flex: 1,
        },

        row: {

            flexDirection: 'row',
        },

        center: {

            justifyContent: 'center',
            alignItems: 'center',

        },

    });

