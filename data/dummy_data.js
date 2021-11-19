import Category from "../models/category";
import Meal from "../models/meal";

 export const CATEGORIES=[
     new Category('c1','Pakistani','#00ff00'),
     new Category('c2','Indian','#ff492d'),
     new Category('c3','Asian','#0542ff'),
     new Category('c4','Chinese','#f5828d'),
     new Category('c5','Turkish','#f5f28d'),
     new Category('c6','Desi','#f52f8d'),
     new Category('c7','Traditional','#f542fd'),
     new Category('c8','Regular','#fe468d')
 ]

 export const MEALS = [
    new Meal(
      'm1',
      ['c1', 'c2'],
      'Spaghetti with Tomato Sauce',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      [
        '4 Tomatoes',
        '1 Tablespoon of Olive Oil',
        '1 Onion',
        '250g Spaghetti',
        'Spices',
        'Cheese (optional)'
      ],
      [
        'Cut the tomatoes and the onion into small pieces.',
        'Boil some water - add salt to it once it boils.',
        'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
        'In the meantime, heaten up some olive oil and add the cut onion.',
        'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
        'The sauce will be done once the spaghetti are.',
        'Feel free to add some cheese on top of the finished dish.'
      ],
      20,
      'simple',
      'affordable'
    ),
  
    new Meal(
      'm2',
      ['c2'],
      'Toast Hawaii',
     
      'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
     
      [
        '1 Slice White Bread',
        '1 Slice Ham',
        '1 Slice Pineapple',
        '1-2 Slices of Cheese',
        'Butter'
      ],
      [
        'Butter one side of the white bread',
        'Layer ham, the pineapple and cheese on the white bread',
        'Bake the toast for round about 10 minutes in the oven at 200°C'
      ],
      10,
      'simple',
      'affordable'
    
    ),
  
    new Meal(
      'm3',
      ['c3'],
      'Classic Hamburger',
      
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      
      [
        '300g Cattle Hack',
        '1 Tomato',
        '1 Cucumber',
        '1 Onion',
        'Ketchup',
        '2 Burger Buns'
      ],
      [
        'Form 2 patties',
        'Fry the patties for c. 4 minutes on each side',
        'Quickly fry the buns for c. 1 minute on each side',
        'Bruch buns with ketchup',
        'Serve burger with tomato, cucumber and onion'
      ],
      45,
      'simple',
      'pricey'
     
    ),
  
    new Meal(
      'm4',
      ['c4'],
      'Wiener Schnitzel',
      
      'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
     
      [
        '8 Veal Cutlets',
        '4 Eggs',
        '200g Bread Crumbs',
        '100g Flour',
        '300ml Butter',
        '100g Vegetable Oil',
        'Salt',
        'Lemon Slices'
      ],
      [
        'Tenderize the veal to about 2–4mm, and salt on both sides.',
        'On a flat plate, stir the eggs briefly with a fork.',
        'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
        'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
        'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
        'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
        'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
      ],
      60,
      'challenging',
      'luxurious'

    ),
  
    new Meal(
      'm5',
      ['c2', 'c5', 'c10'],
      'Salad with Smoked Salmon',
      
      'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
      [
        'Arugula',
        "Lamb's Lettuce",
        'Parsley',
        'Fennel',
        '200g Smoked Salmon',
        'Mustard',
        'Balsamic Vinegar',
        'Olive Oil',
        'Salt and Pepper'
      ],
      [
        'Wash and cut salad and herbs',
        'Dice the salmon',
        'Process mustard, vinegar and olive oil into a dessing',
        'Prepare the salad',
        'Add salmon cubes and dressing'
      ],
      15,
      'simple',
      'luxurious'
    
    ),
  
    new Meal(
      'm6',
      ['c6', 'c10'],
      'Delicious Orange Mousse',
      
      'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
     
      [
        '4 Sheets of Gelatine',
        '150ml Orange Juice',
        '80g Sugar',
        '300g Yoghurt',
        '200g Cream',
        'Orange Peel'
      ],
      [
        'Dissolve gelatine in pot',
        'Add orange juice and sugar',
        'Take pot off the stove',
        'Add 2 tablespoons of yoghurt',
        'Stir gelatin under remaining yoghurt',
        'Cool everything down in the refrigerator',
        'Whip the cream and lift it under die orange mass',
        'Cool down again for at least 4 hours',
        'Serve with orange peel'
      ],
      240, 
      'hard',
      'affordable',
    
    ),
  
    new Meal(
      'm7',
      ['c7'],
      'Pancakes',
      'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
      
      [
        '1 1/2 Cups all-purpose Flour',
        '3 1/2 Teaspoons Baking Powder',
        '1 Teaspoon Salt',
        '1 Tablespoon White Sugar',
        '1 1/4 cups Milk',
        '1 Egg',
        '3 Tablespoons Butter, melted'
      ],
      [
        'In a large bowl, sift together the flour, baking powder, salt and sugar.',
        'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
        'Heat a lightly oiled griddle or frying pan over medium high heat.',
        'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
      ],
      20,
      'simple',
      'affordable'
      
    
    ),
  
    new Meal(
      'm8',
      ['c8'],
      'Creamy Indian Chicken Curry',
      
      'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
      
      [
        '4 Chicken Breasts',
        '1 Onion',
        '2 Cloves of Garlic',
        '1 Piece of Ginger',
        '4 Tablespoons Almonds',
        '1 Teaspoon Cayenne Pepper',
        '500ml Coconut Milk'
      ],
      [
        'Slice and fry the chicken breast',
        'Process onion, garlic and ginger into paste and sauté everything',
        'Add spices and stir fry',
        'Add chicken breast + 250ml of water and cook everything for 10 minutes',
        'Add coconut milk',
        'Serve with rice'
      ],
      35,
      'challenging',
      'pricey'
    )
 ]