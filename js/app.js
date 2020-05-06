
/*Import Statements*/
import Customer from "./BO/Customer.js";
import Bill from "./BO/Bill.js";
import Parcel from "./BO/Parcel.js";
import MainUI from "./ULO/MainUI.js";
import ReportUI from "./ULO/ReportUI.js";
import WebStorageDAO from "./DAO/WebStorageDOA.js";

const app=
{

    mainUIBodyID : document.querySelector("#main-body"),
    reportUIBodyID :document.querySelector("#report-body"),



    init()
    {
        //Logic that will detemrine which ui to initialize
        if(this.mainUIBodyID!=null)
        {
            this.mainUInit();
        }   
        else if(this.reportUIBodyID!=null)
        {
            this.secondUIInt();
        }
    },

    //This will load the mainUI event Listeners
    mainUInit()
    {

        MainUI.calculateButton.addEventListener("click",function(){       
       
        const hasErrors =  MainUI.validateFields(); // validate //validation statments


       if(hasErrors==false)
       {
        
            const parcel = new Parcel(parseFloat(MainUI.parcelTextField.value));
            const customer = new Customer(MainUI.firstNameTextField.value, MainUI.lastNameTextField.value,MainUI.addressTextField.value);
        
            const bill = new Bill(customer,parcel);
    
            WebStorageDAO.storeDataToSessionStorage("billData",bill);

            location.href="html/report.html";
       }

        });    

    },

    //This will load the secondUI event Listeners
    secondUIInt()
    {

        document.addEventListener("DOMContentLoaded",function(){
 
            const bill =WebStorageDAO.getDataFromSessionStorage("billData");

            ReportUI.popularAnswerContainer(new Bill(bill.customer,new Parcel(bill.parcel.weightKg)));
      
        })


    }

}

app.init();