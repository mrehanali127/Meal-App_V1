import React from "react";
import { Text,View,StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';


const MealCompleteDetail=props=>{

    return(
        <View style={styles.mealItem}>
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
            <Text>Preparation Time : {props.duration} min</Text>
            <Text>Complexity Level : {props.complexity}</Text>
            <Text>Affordance Level : {props.affordability}</Text>
        </View>
        <View style={{...styles.mealRow,...styles.mealDetail}}>
            {props.ingredients.map((item)=><Text key={item}>{item}</Text>)}
        </View>
        </View>
    
        </View>
    )
};

const styles=StyleSheet.create({

    mealRow:{
        flexDirection:'column',
        marginHorizontal:10

    },
    mealItem:{
         height:'100%',
         width:'100%',
         backgroundColor:'#f5f5f5',
         borderRadius:20,
         overflow:'hidden',
        marginVertical:10
    },
    mealHeader:{
        height:'50%'
    },
    mealDetail:{
        height:'50%',
        paddingHorizontal:10,
        justifyContent:'flex-start',
        alignItems:'flex-start'
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

export default MealCompleteDetail;