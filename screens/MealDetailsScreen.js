import React from "react";

import { View,Text,StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy_data";
import Colors from "../constants/Colors";
import MealCompleteDetail from "../components/MealCompleteDetail";

const MealDetailsScreen=(props)=>{

    const mealId=props.navigation.getParam('mealId');

    const selectedMeal=MEALS.find(meal=>meal.id===mealId);

    return(
        <View style={styles.screen}>
           <MealCompleteDetail title={selectedMeal.title} image={selectedMeal.imageUrl}
           affordability={selectedMeal.affordability} complexity={selectedMeal.complexity}
           duration={selectedMeal.duration} ingredients={selectedMeal.ingredients}/>
        </View>
    )
};

MealDetailsScreen.navigationOptions=(navigationData)=>{
    const mealId=navigationData.navigation.getParam('mealId');
    const selectedMeal=MEALS.find(meal=>meal.id===mealId);
    return {
        headerTitle:selectedMeal.title,
        headerStyle:{
            backgroundColor:Colors.primaryColor
        },
        headerTintColor:'white'
    };
} 


const styles=StyleSheet.create(
    {
        screen:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }
    }
)

export default MealDetailsScreen;