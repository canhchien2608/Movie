
import React, {Component} from 'react';
import {View ,Text,Image,StyleSheet} from 'react-native';


export default class FlexDimension extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:10,backgroundColor:'#8b0000',alignItems:"center"}}>
                    <Text style={{marginTop:20,color:'white',fontSize:20}}>Movie Chiến Explorer</Text>
                </View>

                <View style={style.flex1}>
                    <View style={style.viewcon1}><Image source = { { uri:"https:////upload.wikimedia.org/wikipedia/vi/thumb/3/3f/Batman_V_Superman_Dawn_Of_Justice.jpg/220px-Batman_V_Superman_Dawn_Of_Justice.jpg"} } 
                                style={style.image}
                                 ></Image></View>
                    <View style={style.viewcon2}><Text style={style.text}>Batman v Superman: Dawn of Justice(2016)</Text></View>
                </View>

                <View style={style.flex1}>
                    <View style={style.viewcon1}><Image source = { { uri:"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg"} } 
                                style={style.image}
                                 ></Image></View>
                    <View style={style.viewcon2}><Text style={style.text}>Batman (1989)</Text></View>
                </View>

                <View style={style.flex1}>
                    <View style={style.viewcon1}><Image source = { { uri:"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg"} } 
                                style={style.image}
                                 ></Image></View>
                    <View style={style.viewcon2}><Text style={style.text}>Batman return 1992 </Text></View>
                </View>

                <View style={style.flex1}>
                    <View style={style.viewcon1}><Image source = { { uri:"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"} } 
                                style={style.image}
                                 ></Image></View>
                    <View style={style.viewcon2}><Text style={style.text}>Batman Forever 1995 </Text></View>
                </View>

                <View style={style.flex1}>
                    <View style={style.viewcon1}><Image source = { { uri:"https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg"} } 
                                style={style.image}
                                 ></Image></View>
                    <View style={style.viewcon2}><Text style={style.text}>Batman & Robin 1997</Text></View>
                </View>

                <View style={style.flex1}>
                    <View style={style.viewcon1}><Image source = { { uri:"https://images-na.ssl-images-amazon.com/images/I/61BwVNyhsML._AC_SY879_.jpg"} } 
                                style={style.image}
                                 ></Image></View>
                    <View style={style.viewcon2}><Text style={style.text}>Batman: The Animated Series (1992-1995)</Text></View>
                </View>
                
            </View>
        );
    }
}

const style = StyleSheet.create({
    image:{
        width:80,
        height:100
    },
    flex1 : {
        flex:15,
        borderWidth: 0.5,
        backgroundColor:'white',
        flexDirection: 'row',
    },
    viewcon1: {
        flex:20,
    },
    viewcon2: {
        flex:80,
    },
    text: {
        fontSize:25,
        fontWeight:'bold',
        color:'black',
    }
})