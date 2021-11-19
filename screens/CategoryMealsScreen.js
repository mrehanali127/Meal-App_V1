import React from "react";

import { View,Text,StyleSheet, Button,FlatList } from "react-native";
import { CATEGORIES,MEALS } from "../data/dummy_data";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";

const CategoryMealsScreen=(props)=>{

    const renderMealItem=(itemData)=>{
        return(
          <MealItem title={itemData.item.title} duration={itemData.item.duration}
          complexity={itemData.item.complexity} affordability={itemData.item.affordability}
          image={itemData.item.imageUrl} onSelectMeal={()=>{
                props.navigation.navigate({
                    routeName:'MealDetail',
                    params:{
                        mealId:itemData.item.id
                    }
                });

          }} />
        )
    }

    const catId=props.navigation.getParam('categoryId');

    const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);

    // return meals that belong to that category
    const displayedMeals=MEALS.filter(meal=>meal.categoryIds.indexOf(catId)>=0);

    return(
        <View style={styles.screen}>
           <FlatList data={displayedMeals} renderItem={renderMealItem} style={{width:'100%'}}/>
        </View>
    )
};

// we can't get selected Category directly because it may
// not access it is declared within object
// so used this method 
CategoryMealsScreen.navigationOptions=(navigationData)=>{
      const catId=navigationData.navigation.getParam('categoryId');
      const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);

      return{
          headerTitle:selectedCategory.title,
          headerStyle:{
            backgroundColor:Colors.primaryColor
        },
        headerTintColor:'white'
      }
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

export default CategoryMealsScreen;