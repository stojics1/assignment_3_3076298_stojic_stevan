import React from "react";

import "./InboxTrash.styles.css";

export InboxTrash = ({mails, currentEmail}) => {
    

    return(
    <div className="INBOXTRASH">
        
        <div id="Inbox">
            <p>Inbox</p>
        </div>

        <div id="Trash">
            <p>Trash</p>
        </div>
    
    </div>
    )
};