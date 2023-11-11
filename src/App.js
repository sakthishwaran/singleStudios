
import logo from './Single_Studios_LOGO.png';
import './style.css';
function Column(){
 return ( <div className="col-md-4 col-sm-12 col-lg-4">
 <div className="card-container">
   <a href="#" className="hero-image-container">
     <img className="hero-image" src="./Single Studios LOGO Psd.png" alt="Spinning glass cube"/>
   </a>
   <main className="main-content">
     <h1><a href="#" >Single Studio</a></h1>
     <p>Newly Lanch</p>
     <div className="flex-row">
      
     </div>
   </main>
   <div className="card-attribute">
   <img src={logo} alt="avatar" className="small-avatar" />
     <p>A Product of  <span><a href="#"  className="text-white">Single Studios </a></span></p>
   </div>
 </div>
</div>
)
}
function App() {
  return (
      <div className='d-md-flex '>
        <Column />
        <Column />
        <Column />
     
      </div>

  );
}

export default App;
