import { BadRequestException, Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";
import * as AWS from "aws-sdk";
import { Readable } from "stream";
 
@Injectable()
export class UploadService {
	private s3: AWS.S3;
	private bucketName: string; 

	constructor() {
		this.s3 = new AWS.S3({
			region: process.env.AWS_REGION,
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		});
		this.bucketName = process.env.AWS_BUCKET_NAME!; 
	}

	async uploadFile(user_id:string , file: Express.Multer.File): Promise<string> {
		if (!file) {
			throw new BadRequestException("No file uploaded");
		}
		const fileStream = Readable.from(file.buffer); 
		const uploadParams = {
			Bucket: this.bucketName,
			Key: `${user_id}/${uuid()}.${file.originalname.split(".").pop()}`,
			Body: fileStream,
			ContentType: file.mimetype,
		};
		try {
			const uploadResult =  await this.s3.upload(uploadParams).promise();
            return uploadResult.Location; 
		} catch (error: any) {
			throw new Error(`Failed to upload file to S3: ${error.message}`);
		}
	}
}
