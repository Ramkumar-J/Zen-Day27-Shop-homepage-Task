import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import Shop from './Shop';
import Foot from './Foot';
import Card from './Card';
import {useState} from "react";


function App() {
  const[Productdata,setProductdata]=useState(
    [{
      id:1,
      bookname:"Marketing",
      oldprice:"",
      newprice:80.00 ,
      isbadge:false,
      israting:false,
      isbtnName:"View options",
      bookimage:"https://www.visme.co/wp-content/themes/visme/images/marketing-strategies-cover.png",
    },
    {
      id:2,
      bookname:"Entrepreneurs",
      oldprice:"$20.00" ,
      newprice:18.00 ,
      isbadge:true,
      israting:true,
      isbtnName:"Add to cart",
      bookimage:"https://www.visme.co/wp-content/themes/visme/images/Business-Startup-with-Dropshadow-Curve.png",
    },
    {
      id:3,
      bookname:"Brand Identity",
      oldprice:"$50.00" ,
      newprice:25.00 ,
      isbadge:true,
      israting:false,
      isbtnName:"Add to cart",
      bookimage:"https://www.visme.co/wp-content/themes/visme/images/Brand-HandBook.png",
    },
    {
      id:4,
      bookname:"Infographics",
      oldprice:"" ,
      newprice:40.00  ,
      isbadge:false,
      israting:true,
      isbtnName:"Add to cart",
      bookimage:"https://www.visme.co/wp-content/themes/visme/images/Shareable-Infographics-with-Dropshadow-Curve-r2.png",
    },
    {
      id:5,
      bookname:"Presentaions",
      oldprice:"$50.00" ,
      newprice:25.00 ,
      isbadge:true,
      israting:false,
      isbtnName:"Add to cart",
      bookimage:"https://www.visme.co/wp-content/themes/visme/images/how-to-make-presentation/Presentation-Ebook-header.png",
    },
    {
      id:6,
      bookname:"Marketing",
      oldprice:"",
      newprice:280.00,
      isbadge:false,
      israting:false,
      isbtnName:"View options",
      bookimage:"https://www.visme.co/wp-content/themes/visme/images/marketing-strategies-cover.png",
    },
    {
      id:7,
      bookname:"Entrepreneurs",
      oldprice:"$20.00" ,
      newprice:18.00  ,
      isbadge:true,
      israting:true,
      isbtnName:"Add to cart",
      bookimage:"https://www.visme.co/wp-content/themes/visme/images/Business-Startup-with-Dropshadow-Curve.png",
    },
    {
      id:8,
      bookname:"Infographics",
      oldprice:"",
      newprice:40.00  ,
      isbadge:false,
      israting:true,
      isbtnName:"Add to cart",
      bookimage:"https://www.visme.co/wp-content/themes/visme/images/Shareable-Infographics-with-Dropshadow-Curve-r2.png",
    },]
  )
  

 const[Cartitems,setCartitems] = useState([]);
 const [Total,setTotal]=useState(0);
 let AddtoCart= (item) => {
  setCartitems([...Cartitems,item]);
  setTotal(Total + item.newprice);
 }

 let RemovefromCart= (item) => {
  let cartIndex=Cartitems.findIndex(obj => item.id===obj.id);
  Cartitems.splice(cartIndex,1);
  setCartitems([...Cartitems]);
  setTotal(Total - item.newprice);
 }


  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
      <Navbar Cartitems={Cartitems} Removecart={RemovefromCart} Total={Total}></Navbar>
      </nav>
      <header class="bg-dark py-5">
      <Shop></Shop>
      </header>
      <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">   
      {
        Productdata.map((product) => {
          return <Card Product={product} AddCart={AddtoCart} CartItems={Cartitems}></Card>
        })
      }
        </div>
        </div>
      </section>
      <Foot></Foot> 
    </div>
  );
}

export default App;