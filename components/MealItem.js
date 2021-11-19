import React from "react";
import { Text,View,StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';


const MealItem=props=>{

    return(
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealRow,...styles.mealHeader}}>
                <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
            <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
            </View>
            </ImageBackground>
        </View>
        <View style={{...styles.mealRow,...styles.mealDetail}}>
            <Text>{props.duration} min</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
        </View>
        </View>
        </TouchableOpacity>
        </View>
    )
};

const styles=StyleSheet.create({

    mealRow:{
        flexDirection:'row',
        marginHorizontal:10

    },
    mealItem:{
         height:200,
         width:'100%',
         backgroundColor:'#f5f5f5',
         borderRadius:20,
         overflow:'hidden',
        marginVertical:10
    },
    mealHeader:{
        height:'85%'
    },
    mealDetail:{
        height:'15%',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
    },

    title:{
        fontSize:22,
        color:'white',
        textAlign:'center'
    }

});

export default MealItem;