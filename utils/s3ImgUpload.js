const {S3Client, PutObjectCommand, GetObjectCommand} = require('@aws-sdk/client-s3')
require('dotenv').config()

const s3 = new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey
    }
  });


// Function to upload image to S3
exports.uploadCVtoS3 = async (fileContent, fileName) => {
    const params = {
      Bucket: "sb.mytest",
      Key: `cv/${fileName}`, // File name you want to save as in S3
      Body: fileContent,
      ACL: 'public-read', // Make the file publicly readable
      ContentType: 'application/pdf', // Change if needed based on file type
    };
  
    try {
      const command = new PutObjectCommand(params);
      await s3.send(command);
      const url = `https://s3.us-east-1.amazonaws.com/sb.mytest/cv/${fileName}`;
      // console.log(url);
      
      return url; // This will be the public URL
    } catch (error) {
      console.error('Error uploading to S3', error);
      throw error;
    }
  };