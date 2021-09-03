import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    search_div: {
        padding: "12px 16px",
        borderBottom: "2px solid #222D37",
        color: "#DDE4EA"
      },
    user_setting : {
        position: "absolute",
        width: "84px",
        height: "2%",
        left: "2%",
        top: "4%",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "120%",
        lineHeight: "21px",
        color: "#DDE4EA"
    },
    imgCircle : {
        width : "120px",
        height : "120px",
        borderRadius : "50%",
        backgroundColor: "#DDE4EA"
    },
    btnChangeProPic : {
        width: "208px",
        height: "40px",
        backgroundColor: "#BBF146",
        border: "2px solid #BBF146",
        color: "#15202B",
        letterSpacing: "1px !important",
        "&:hover": {
            color : "#BBF146"
          },
    },
    profile : {
        width:"120px",
        height :"120px",
        borderRadius: "50%"
    }
    
}))
