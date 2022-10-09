import React, { useEffect, useState } from 'react';
import DisplayMeal from '../DisplayMeal/DisplayMeal';

const Meals = () => {
    const [myMeals,setMyMeals]= useState({});

    useEffect(()=>{
      const dataLoader = async()=>{
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
          response.ok ? console.log('Successfull') : console.log('failed');
          const data = await response.json();
          setMyMeals(data)
        } catch (error) {
          console.log(error)
        }
      };
  
      dataLoader()
    },[])
  
    const {meals} = myMeals;
    
    console.log(meals)
  
    return(
      <div className="grid grid-cols-3 gap-9">
        {
          meals?.map(meal =>{
            const {strMeal,strMealThumb} = meal;
            return <DisplayMeal name={strMeal} image={strMealThumb}></DisplayMeal>
          })
        }
      </div>
    )
};

export default Meals;