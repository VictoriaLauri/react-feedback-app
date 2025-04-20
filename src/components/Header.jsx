function Header(props) {
  return (
   <header className="header">
     <div className="container">
       <h1>{props.text}</h1>
     </div>
    </header>
  )
}

export default Header