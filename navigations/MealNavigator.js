import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';

const MealNavigator=createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals:{
            screen:CategoryMealsScreen
        },
        MealDetail:MealDetailsScreen
    },
    {
        //set Default Configuration
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:Colors.primaryColor
            },
            headerTintColor:'white',
            
        }
    }
)

export default createAppContainer(MealNavigator);