import { Injectable } from '@nestjs/common';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}
  async createProfile(createProfileInput: CreateProfileInput) {
    const profile = await this.prisma.profile.findUnique({
      where: {
        email: createProfileInput.email.trim().toLowerCase(),
      },
    });

    if (profile) {
      return profile;
    }

    return await this.prisma.profile.create({
      data: {
        ...createProfileInput,
        email: createProfileInput.email.trim().toLowerCase(),
      },
    });
  }

  async findAllProfiles() {
    return await this.prisma.profile.findMany({});
  }

  async getProfileById(id: string) {
    return await this.prisma.profile.findUnique({
      where: {
        id,
      },
      include: {
        servers: {
          include: {
            channels: true,
          },
        },
      },
    });
  }

  async getProfileByEmail(email: string) {
    return await this.prisma.profile.findUnique({
      where: {
        email: email.toLowerCase().trim(),
      },
      include: {
        servers: {
          include: {
            channels: true,
          },
        },
      },
    });
  }

  async updateProfile(id: string, updateProfileInput: UpdateProfileInput) {
    const profile = await this.prisma.profile.findUnique({
      where: {
        id,
      },
    });

    if (!profile) {
      return null;
    }

    return await this.prisma.profile.update({
      where: {
        id,
      },
      data: {
        ...updateProfileInput,
        email: updateProfileInput.email.trim().toLowerCase(),
      },
    });
  }

  async remove(id: string) {
    const profile = await this.prisma.profile.findUnique({
      where: {
        id,
      },
    });

    if (!profile) {
      return null;
    }

    return this.prisma.profile.delete({
      where: { id },
    });
  }
}
