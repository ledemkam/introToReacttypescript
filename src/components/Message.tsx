import { MessageInt } from "../models"

type MessageProps = {
    mess: MessageInt;
    messData: MessageInt[];
    setMessData: React.Dispatch<React.SetStateAction<MessageInt[]>>;
}



const Message = ({mess,messData,setMessData} : MessageProps) => {
  return (
    <div className="message-container">
        <p>{mess.message}</p>
        <h3></h3>
        <span className="delete">x</span>
    </div>
  )
}

export default Message