class Parcel
{

    weightKg;


    constructor(kg)
    {
        this.weightKg=kg;
    }

    calCulateDeliveryCharge()
    {
        let cost;

         if(this.weightKg<2.5)
         {
             cost = this.weightKg * 3.50;
         }

        else if(this.weightKg>=2.5 && this.weightKg <=5)
         {
             cost = this.weightKg * 2.85;
         }
         else if(this.weightKg>5 && this.weightKg <=7)
         {
             cost = this.weightKg * 2.45;
         }

         else 
         {
             cost = this.weightKg * 3.25;
         }

         return cost.toFixed();
    }

}


export default Parcel;