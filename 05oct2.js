//optional chaining

const builder = {
    name: 'Remo',
    cat: {
      name: 'hen'
    }
  };
  
 // const donkeyName = builder.dog?.name;
  //console.log(donkeyName);
  console.log(builder ?.name);          //remo


  //optional chainig 2

  const myData ={
      details1: {height:180},
      details2:{age:22},
      detail3:{sex:'male'}

  }
  console.log(myData ?.detail1);                 //undefined
  console.log(myData ?.details1.height);        //180


  //opt cahing3
  const employee = {
    name1: 'naga',
    department: {
      name1: 'Tcs'
    }
  };
  const name1 = employee.name1;
  console.log(name1);      //naga