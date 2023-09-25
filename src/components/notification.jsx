import React from "react"

const Notification = (props) => {
  return (
        <div className={props.className}>
            {props.text}
        </div>
  )
}

export default Notification
