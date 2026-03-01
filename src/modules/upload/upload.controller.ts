import {
	BadRequestException,
	Body,
	Controller,
	Post,
	Req,
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from "@nestjs/common";
import { UploadService } from "./upload.service";
import { FileInterceptor } from "@nestjs/platform-express"; 
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation } from "@nestjs/swagger";  
import { SSOAuthGuard } from "src/core/guards/guards";
import { FileUploadDto } from "./upload.dto";
import { RequestDto } from "src/core/dtos/request.dto";

@Controller("upload")
@ApiBearerAuth()
export class UploadController {
	constructor(private readonly uploadService: UploadService) {}

	@Post() 
	@UseInterceptors(FileInterceptor("image"))
    // @UseGuards(SSOAuthGuard)
	@ApiOperation({ summary: "Upload a file" })
	@ApiConsumes("multipart/form-data")
	@ApiBody({
		description: "Upload image file",
		type: FileUploadDto,
	})
	async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: FileUploadDto 
    // , @Req() req: RequestDto
) {
		if (!file) {
			throw new BadRequestException("No file uploaded.");
		}

		const fileUrl = await this.uploadService.uploadFile("test", file);
		return { url: fileUrl };
	}
}
