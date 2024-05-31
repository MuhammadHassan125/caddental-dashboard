import { Box, Button, Typography, styled } from "@mui/material";

import UploadFiles from "./upload/UploadFiles";
import "./index.css";
const FileUpload = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      <div className="files-main">
        <div className="checkout-heading">
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              File Upload
            </Typography>
            <Typography
              variant="p"
              sx={{ fontWeight: 300, fontFamily: "Poppins" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              recusandae.
            </Typography>
          </Box>
        </div>

        <div className="upload-box">
          <Button
            component="label"
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              borderColor: "black",
              border: 2,
              fontWeight: "800",
              fontFamily: "Inter",
              color: "black",
              marginBottom: 2,
            }}
          >
            <Typography 
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              color: "black",
            }}
            >
            Upload your Modal
            </Typography>
            <VisuallyHiddenInput type="file" />
          </Button>
          <p>Drag and drop your images anywhere or</p>
          <p>Browse files from your computer</p>
        </div>

        <UploadFiles />
      </div>
    </>
  );
};

export default FileUpload;
