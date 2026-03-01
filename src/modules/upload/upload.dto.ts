import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import {  FileType } from "./upload.types";

export class FileUploadDto {
	@ApiProperty({
		type: "string",
		format: "binary",
		description: "Image file to be uploaded",
		example: "image/jpeg",
	})
	image: Express.Multer.File;

	@ApiProperty({
		description: "Type of the file being uploaded",
		enum: FileType,
		example: FileType.IMAGE,
	})
	@IsEnum(FileType)
	type: FileType;

 
}
