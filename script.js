/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((ele)=>{if (ele.profession=="developer"){console.log(ele)}})
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((ele)=>{if (ele.profession=="developer"){console.log(ele)}})
    //Write your code here , just console.log
  }

  function addData() {
    let obj={id:4,name:"susan",age:"20",profession:"intern"} ;
    arr.push(obj)
    console.log(arr);
    //Write your code here, just console.log
  }
  
  function removeAdmin() {
     arr=arr.filter((ele)=>ele.profession=="admin"?false:true)
     console.log(arr)
    //Write your code here, just console.log
  }
  
  function concatenateArray() {
    let arr2 = [
        { id: 4, name: "alice", age: "25", profession: "developer" },
        { id: 5, name: "susan", age: "26", profession: "developer" },
        { id: 6, name: "leo", age: "27", profession: "admin" },
      ];
    arr=arr.concat(arr2)
    console.log(arr)
    //Write your code here, just console.log
  }