"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:5173',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Accept, Authorization',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        forbidUnknownValues: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        skipMissingProperties: true,
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map