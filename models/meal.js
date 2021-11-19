class Meal{
    constructor(id,categoryIds,title,imageUrl,ingredients,steps,duration,
        complexity,affordability){
            this.id=id;
            this.categoryIds=categoryIds;
            this.title=title;
            this.imageUrl=imageUrl;
            this.ingredients=ingredients;
            this.steps=steps;
            this.duration=duration;
            this.complexity=complexity;
            this.affordability=affordability;

        }

}

export default Meal;