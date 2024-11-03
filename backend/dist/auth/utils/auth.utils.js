"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserAuthorization = checkUserAuthorization;
const common_1 = require("@nestjs/common");
function checkUserAuthorization(userId, requestedUserId) {
    if (userId !== requestedUserId) {
        throw new common_1.ForbiddenException('You are not authorized to access or modify this data');
    }
}
//# sourceMappingURL=auth.utils.js.map