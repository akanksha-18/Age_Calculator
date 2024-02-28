const ageCalculate=()=>{
    const today=new Date();
    const inputDate=new Date(document.getElementById("date-input").value);
    const birthDetails={
      date : inputDate.getDate(),
      month:inputDate.getMonth()+1,
      year: inputDate.getFullYear(),
};
 const currentYear=today.getFullYear();
 const currentMonth=today.getMonth();
 const currentDate=today.getDate();

 if(isFutureDate(birthDetails,currentYear,currentMonth,currentDate))
 {
    alert("Not Born Yet");
    displayresult("-","-","-");
    return;
 }
 const {years,months,days}=calculateAge(
    birthDetails,currentYear,currentMonth ,currentDate
 );

 displayresult(days,months,years);
};
const isFutureDate = (birthDetails, currentYear, currentMonth, currentDate) => {
    const birthDate = new Date(birthDetails.year, birthDetails.month - 1, birthDetails.date);
    const currentDateObj = new Date(currentYear, currentMonth, currentDate);

    return birthDate > currentDateObj;
};

const calculateAge=(birthDetails,currentYear,currentMonth,currentDate) => {
    let years=currentYear-birthDetails.year;
    let months,days;
    if(currentMonth<birthDetails.month){
        years--;
        months=12-(birthDetails.month=currentMonth);
    }
    else{
        months=currentMonth - birthDetails.month;
    }
    if(currentDate < birthDetails.date){
        months--;
        const lastMonth=currentMonth=== 1 ?12:
        currentMonth-1;
        const daysInLastMonth= getDaysInMonth(lastMonth, currentYear);
        days=daysInLastMonth-(birthDetails.date-currentDate);
    }
    else{
        days=currentDate - birthDetails.date;

    }
    return {years,months,days}
};
const getDaysInMonth=(month , year)=>{
    const isLeapYear=year%4===0 &&(year%100 != 0 || year%400 ===0);
    const getDaysInMonth=[31, isLeapYear ? 29:28, 31,30,31,30,31,31,30,31,30,31];
    return getDaysInMonth[month -1];
};
const displayresult=(bdate,bMonth,bYear) => {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent=bMonth;
    document.getElementById("days").textContent=bdate
};
document.getElementById("calc-age-btn").addEventListener("click", ageCalculate);
