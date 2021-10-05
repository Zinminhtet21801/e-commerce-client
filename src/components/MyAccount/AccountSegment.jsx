import classes from "./MyAccount.module.css"
const AccountSegment = (props) =>{
    return(
        <div className={`${classes["email_container"]}`}>
        <span>{props.segmentTitle}</span>
        <span>{props.name}</span>
        {!props.noHr && <hr />}
        </div>
    ) 
}

export default AccountSegment