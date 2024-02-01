import React from "react";

import { Email } from "../email/email.components";
import "./emailList.styles.css";

export const EmailList = ({ mails }) => (
    <div className="emailList">
    {mails.map(mail => (
            <Email key={mail.id} mail={mail}/>
    ))}
    </div>
);

