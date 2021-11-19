import React from "react";

import { View,Text,StyleSheet, Button, FlatList, Dimensions,TouchableOpacity } from "react-native";

import {CATEGORIES} from '../data/dummy_data';
import Colors from '../constants/Colors';
import CategoryGridTile from "../components/CategoryGridTile";
import { useEffect, useState } from "react";


const CategoriesScreen=(props)=>{

    /*
    const [isLoading,setLoading]=useState(true);
    const [categoriesData,setcategoriesData]=useState([]);

    
    useEffect(()=>{
        fetch('http://192.168.0.123:3000/categories')
        .then((response)=>response.json())
        .then((response)=>setcategoriesData(response))
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false));
      },[]);
      */
      

    const renderGridItem=(itemData)=>{
        return(
           <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={()=>{
            props.navigation.navigate({
                routeName:'CategoryMeals',
                params:{
                    categoryId:itemData.item.id
                }
            });
           }
        }/>
        )
    }
    
   // console.log(props);
    return(
        <View>
        {/** 
       <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
       */}
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
        </View>
    )
};

// dynmically add other properties to objects
CategoriesScreen.navigationOptions={

    headerTitle:'Meal Categories',
    headerStyle:{
        backgroundColor:Colors.primaryColor
    },
    headerTintColor:'white'
};

const styles=StyleSheet.create(
    {
        gridItem:{
            flex:1,
            margin:15,
            height:150,
            width:Dimensions.get('window').width/2.5
        },
        screen:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }
       
    }
)

export default CategoriesScreen;