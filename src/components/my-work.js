import  { useState }  from 'react'
import './my-work.css';

function Mywork() {
    var current_order =['part0','part1','part2']
    const [order01, setOrder01] = useState(current_order[0])
    const [order02, setOrder02] = useState(current_order[1])
    const [order03, setOrder03] = useState(current_order[2])
    
    function changerOrderPlus(){
      current_order=[order01,order02,order03]
      var temp = current_order.shift()
      current_order.push(temp)
      setOrders()   
    }
    function changerOrderMinus(){
      current_order=[order01,order02,order03]
      var temp = current_order.pop()
      current_order.unshift(temp)
      setOrders()
    }
    function setOrders(){
      setOrder01(current_order[0])
      setOrder02(current_order[1])
      setOrder03(current_order[2])
      
    }
  return (
    <>
    <h3 className="mywork-title">Meu trabalho</h3>
    <div className="mywork">
        
      <div className={`mywork-part ${order01}`} >1</div>
      <div className={`mywork-part ${order02}`}  >2</div>
      <div className={`mywork-part ${order03}`} >3</div>
      

    </div>
    <div className='mywork-controls'>
        <div onClick={changerOrderMinus}></div>
        <div onClick={changerOrderPlus}></div>
    </div>
    </>
  );
}

export default Mywork;