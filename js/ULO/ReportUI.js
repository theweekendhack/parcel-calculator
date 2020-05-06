const ReportUI=
{
    answerContainer : document.querySelector("#answer-body"),


    popularAnswerContainer(bill)
    {

        this.answerContainer.innerHTML=`<div>Customer Name : ${bill.customer.firstName} ${bill.customer.lastName}</div>`;
        this.answerContainer.innerHTML+=`<div>Customer Addres : ${bill.customer.address}</div>`;
        this.answerContainer.innerHTML+=`<div>Parcel Weight (kg) : ${bill.parcel.weightKg}</div>`;
        this.answerContainer.innerHTML+=`<div>Delivery Charge (lbs) : ${bill.parcel.calCulateDeliveryCharge()}</div>`;

    }

}

export default ReportUI;