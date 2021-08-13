import "dotenv/config"
import AWS from "aws-sdk";

const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_S3_REGION
})

export default s3;