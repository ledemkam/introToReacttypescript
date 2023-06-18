import React, { FormEvent, useRef, useState } from "react";
import { MessageInt } from "./models";
import Message from "./components/Message";

const App = () => {
  //utilisons un useref pour recuperer ce qui est taper dans l input
  const inputMessage = useRef<HTMLInputElement>(null); 

  const [messaData, setMessaData] = useState<MessageInt[]>([])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //logique d envoi du message avec useref
   const mess:MessageInt = {
       id: Math.round(Math.random() * Date.now()),
       message: inputMessage?.current?.value,
       date: Date.now()
   }
   setMessaData((prevData) => [...prevData, mess])

   const inputRef = inputMessage.current?.value
 
  }


  return (
    <div className="App">
       <h2>Poster un Message</h2>
       <form onSubmit={e => handleSubmit(e)}>
        <input type="text" placeholder='eingeben' id='inputMessage' ref={inputMessage}/>
        <input type="submit" value="senden" />
       </form>
       <h2>Lister les messages</h2>
       <div>{messaData?.map(mess =>{
         <Message mess={mess} key={mess.id} messData={messaData}/>
       })}</div>
    </div>
  );
}

export default App;
