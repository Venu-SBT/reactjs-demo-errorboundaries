const Button = () => {
  const clickHandler = () => {
     console.log("Button clicked!!");
  };

  return (
    <button onClick={clickHandler}>Click Me</button>
  )
}

export default Button;