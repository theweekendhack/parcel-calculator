const MainUI = 
{

    calculateButton : document.querySelector("#calculateButton"),
    formControlWrapper : document.querySelectorAll(".form-control"),
    parcelTextField : document.querySelector("#parcelWeight"),
    firstNameTextField : document.querySelector("#firstName"),
    lastNameTextField : document.querySelector("#lastName"),
    addressTextField : document.querySelector("#address"),


    errorAnimateElements(txtBox,value)
    {
        if(value=="error")
        {
            txtBox.style.border="2px solid red";
        }
        else if(value=="success")
        {
            txtBox.style.border="2px solid #f0f0f0";
        }
        
    
    },

    checkForMandtoryField(arr)
    {
        let hasError=false;
        
        for(let i=0; i<arr.length; i++)
        {
            const label=arr[i].element.children[0];
            const textBox=arr[i].element.children[1];
            const error=arr[i].element.children[2];

            if(textBox.value=="")
            {
                    
                hasError=true;
                error.innerHTML=`Sorry, you must enter a ${label.innerHTML}` 
                
                this.errorAnimateElements(textBox,'error')
            }

            else
            {
                if(arr[i].validationType=="validNumber")
                {
                   if(this.checkForNumber(arr[i].element))
                   {
                       hasError=true;
                   }
                   else
                   {
                    this.errorAnimateElements(textBox,'success')
                   }
                }
                else
                {
                    error.innerHTML="";
                    this.errorAnimateElements(textBox,'success')
                }
            }
        
        }
        return hasError;
    },

    checkForNumber(elementToValidate)
    {

        const label=elementToValidate.children[0];
        const textBox=elementToValidate.children[1];
        const error=elementToValidate.children[2];

        //Test to see if the value entered is not a number
        if(isNaN(textBox.value))
        {
            
            error.innerHTML=`${label.innerHTML} must be a number`;
            this.errorAnimateElements(textBox); 
            return true;
        }
        else
        {
            error.innerHTML=``;
        }
    
    },

    //Method will validatefields
    validateFields()
    {
        let hasError=false;
        //The below array will store the div of the fields that you want to check to see if the 
       // text field is empty as will determine what further validaiton should be added
        const elementsToValidateEmptyValue = 
        [
            {
              element: this.formControlWrapper[0],
              validationType:null
            },
            {
                element: this.formControlWrapper[1],
                validationType:null
            },
            {
                element: this.formControlWrapper[3],
                validationType:"validNumber"
            },
            
        ];
    
       
        hasError=this.checkForMandtoryField(elementsToValidateEmptyValue);
              
        return hasError;
    }
    
}

export default  MainUI;