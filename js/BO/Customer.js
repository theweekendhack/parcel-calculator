 class Customer 
 {
    firstName;
    lastName;
    email;
    address;

    constructor(firstName,lastName,address)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
    }

    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
    


 }

 export default Customer;




