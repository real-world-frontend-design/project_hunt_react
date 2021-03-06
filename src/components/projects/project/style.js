import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        // marginTop: "60px",
        position: "relative",
        width: "745px",
    },
    row: {
      display: "flex"
    },
    center: {
    //   paddingTop: "60px",
      margin: "20px auto 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    right: {
      position: "absolute",
      right: 0
    },
    image: {
      height: 40
    },
    media: {
      height: 140
    },
    overly: {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "black",
      fontWeight: "bold"
    },
    details: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
    },
    title: {
      padding: '0 16px',
    },
    cardActions: {
      padding: '0 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    cardAction: {
      display: 'block',
      textAlign: 'initial',
    },
  }));