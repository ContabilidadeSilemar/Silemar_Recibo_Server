import { UserService } from './../user/user.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class IsadminService {
  constructor(private readonly userService: UserService) {}

  async findOne(id: string) {
    const user = await this.userService.findOne(id);
    return { isAdmin: user.isAdmin };
  }
}
