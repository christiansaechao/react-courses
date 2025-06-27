
export default class BurgerModel 
{
    //please fill the constructor with functionality.
    constructor()
    {
        this.ingredients=[];
        this.addOns=[];
        this.price=0; 
        this.name="";
    }

    get ingredients()
    {
        return this.ingredients;
    }
    get addOns()
    {
        return this.addOns;
    }

    get price()
    {
        return this.price;
    }

    get burgerName()
    {
        return this.burgerName;
    }
}