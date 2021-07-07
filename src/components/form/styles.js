import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            marginBottom: theme.spacing(1)    
        }  
    },
    
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    form: {
        display:"flex", 
        justifyContent: "center", 
        alignItems: "center",
        flexDirection: "column",
    }
}))