import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Dimensions, TextInput } from 'react-native';
import { Animated, Easing } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const {Value, timing} = Animated;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class HeaderBar extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            isFocused: false,
            keyWord: '',
            addMenu: [{label: 'Item 1', value: 1}, {label: 'Item 2', value: 2}]
        }
        this._input_box_translate_x = new Value(width)
        this._back_button_opacity = new Value(0)
        this._content_translate_y = new Value(height)
        this._content_opacity = new Value(0)
    }


    _onFucus = () =>
    {
        // this.setState({isFocused: true})
        this.setState({isFocused: true});

        // input box
        const input_box_translate_x_config = {
            duration: 200,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
            
        }
        // 
        const back_button_opacity_config = {
            duration: 200,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }

        // content
        const content_translate_y_config = {
            duration: 0,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }
        const content_opacity_config = {
            duration: 200,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }

        // run animatetion
        timing(this._input_box_translate_x, input_box_translate_x_config).start()
        timing(this._back_button_opacity, back_button_opacity_config).start()
        timing(this._content_translate_y, content_translate_y_config).start()
        timing(this._content_opacity, content_opacity_config).start()
    }

    _onBlur = () => {
        this.setState({isFocused: false})

        const input_box_translate_x_config = {
            duration: 200,
            toValue: width,
            easing: Easing.inOut(Easing.ease)
        }
        // 
        const back_button_opacity_config = {
            duration: 50,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }

        // content
        const content_translate_y_config = {
            duration: 0,
            toValue: height,
            easing: Easing.inOut(Easing.ease)
        }
        const content_opacity_config = {
            duration: 200,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }

        // run animatetion
        timing(this._input_box_translate_x, input_box_translate_x_config).start()
        timing(this._back_button_opacity, back_button_opacity_config).start()
        timing(this._content_translate_y, content_translate_y_config).start()
        timing(this._content_opacity, content_opacity_config).start()
    }

    render()
    {
        return (
            <>
            <View style={{width: '90%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            {!this.state.isFocused ? 
                <TouchableOpacity
                activeOpacity={1}
                // underlayColor={'#ccd0d5'}
                onPress={this._onFucus}
              style={{width: 30, height: 30}}
            >
              <Image
                style={{width: 30, height: 30}}
                resizeMode='contain'
                source={require('./Icon/searchIcon.png')}
              ></Image>
            </TouchableOpacity> :
            <TouchableOpacity
                activeOpacity={1}
                // underlayColor={'#ccd0d5'}
                onPress={this._onBlur}
              style={{width: 30, height: 30, justifyContent: 'center', alignItems: 'center'}}
            >
              <Image
                style={{width: 25, height: 25}}
                resizeMode='contain'
                source={require('./Icon/BackIcon.png')}
              ></Image>
            </TouchableOpacity>
            }
            
            <TextInput 
                style={[{width: '60%', alignItems: 'flex-start', padding: 5}, 
                this.state.isFocused && styles.focusedTextInput]}
                placeholderTextColor={!this.state.isFocused ? '#fff' : '#7e848b'}
                // onFocus={() => {this.setState({isFocused: true});console.log(this.state.ifFocused)}}
                onFocus={() => {this._onFucus()}}
                // onBlur={() => {this.setState({isFocused: false}); console.log(this.state.ifFocused)}}
                // onBlur={() => {this._onBlur()}}
                placeholder='Tìm kiếm'
        
            >
              {/* <Text style={{color: '#fff', fontSize: 14}}>Tìm kiếm</Text> */}
            </TextInput>
            <TouchableOpacity style={{}}>
              <Image
                resizeMode='contain'
                style={{width: 30, height: 30}}
                source={require('./Icon/qr-code.png')}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              {!this.state.isFocused ? <Image
                resizeMode='contain'
                style={this.state.isFocused ? styles.addBtnNoActive : styles.addBtnActive}
                source={require('./Icon/add.png')}
              ></Image> : null}
            </TouchableOpacity>
            {/*  */}
            </View>

            <Animated.View
                style={[styles.contentSearchTool, {opacity: this._content_opacity, transform: [{translateY: this._content_translate_y}]}]}
            >
                <SafeAreaView
                    style={styles.content_search_tool_area}
                >
                    <View style={styles.separator}/>
                    <Text>Hi</Text>
                </SafeAreaView>
            </Animated.View>
            </>
        )
    }
}

export default HeaderBar;

const styles = StyleSheet.create({
    input_box: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'white',
        width: width - 32
    },
    focusedTextInput:{
        backgroundColor: 'white',
        borderRadius: 5,
        borderStyle: 'solid',
        width: '70%'
    },
    addBtnActive:{
        width: 30,
        height: 30,
    },
    addBtnNoActive:{
        width: 0,
        height: 0
    },
    contentSearchTool:{
        width: width,
        height: '92.7%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 999,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})