import React from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'

const mapStateToProps= state=>{
    console.log("state fetched:", JSON.stringify(state)) ;
    return{
        userID: state.userID
    }
}
const mapDispatchToProps= ()=>{
    return{
    }
}
const logDepButton=function({userID=undefined,text=''}) {
    if(userID)
        return (
            <Button size="large" >
                {text}
            </Button>
        );
    return(
        <Button size="large" disabled>
            {text}
        </Button>
    );
}
const LogDepButton= connect(mapStateToProps,mapDispatchToProps())(logDepButton)
export default  LogDepButton