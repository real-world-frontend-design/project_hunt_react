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
        alignItems: "center",
        height: "100vh"  
    },  
    
    form: {    
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
        width: '50ch'
    }
}));