/* let user:[number,string] = [1, 'Shree']
user.push(1) 
      /\
 tupples are a fixed length array where each element has a particular type */

/*  enums are a list of related content
    \/ 
const enum Size{
    Small, Medium, Large
  }
  let mySize: Size = Size.Medium;
   console.log(mySize) */

/*  function calculateTax(income: number, taxYear= 2022): number {
if (taxYear < 2022)
 return income*1.2
return income * 1.3   // function
}
calculateTax(10_000, 2022)*/

/* let employee: {
 readonly id: number
  name: string
  retire: (date: Date) => void
} = {id:1, 
  name: 'Shree',
  retire: (date: Date) =>{   // objects
    console.log(date)
  }
};
*/

/*
type Employee = {
  readonly id: number
   name: string
   retire: (date: Date) => void
}

let employee: Employee = {
  id:1, 
   name: 'Shree',
   retire : (date: Date) => {   // type aliases
     console.log(date);
   }
  };
 */

/*  function kgToLbs(weight: number | string) :number{
   // Narrowing
   if(typeof weight === 'number')
   return weight*2.2
  else 
  return parseInt(weight)* 2.2        //union types
  }

  kgToLbs(10);
  kgToLbs('10kg')
  */

/*  type Draggable = {
    drag: () => void
  }

  type Resizable = {
    resize: () => void        //Intersection Type
  }

  type UIWWidget = Draggable & Resizable

  let textBox : UIWWidget = {
    drag: () => {},
    resize:() => {}
  }
*/  

//Literal (exact, specific)
/*type Quantity = 50 | 100
let quantity: Quantity = 100
                              //Literal Types       
type Metric = 'cm' | 'inch'
*/

/*function greet(name: string | null | undefined){
  if(name)
  console.log(name.toUpperCase())
else
console.log('Hola')           //nullable Types
}
greet(null)
*/

type Customer = {
  birthday:Date
}

function getCustomer(id: number): Customer | null{
  return id === 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(1)
// Optional property access operator
console.log(customer?.birthday?.getFullYear())

//Optional element access operator 
// customers?.[0]

//Optional call
let log: any = null;
log?.('a')